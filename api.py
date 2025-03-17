from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import cv2
import mediapipe as mp
import numpy as np
import base64
import threading
import time
import os
from physiocare_module import PhysioCare

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Global variables to store the PhysioCare instance and processing state
physio_instance = None
processing_thread = None
is_processing = False
current_frame = None
current_similarity = 0
current_video_frame = None

@app.route('/api/start', methods=['POST'])
def start_exercise():
    global physio_instance, processing_thread, is_processing
    
    if is_processing:
        return jsonify({"error": "Exercise session already running"}), 400
    
    data = request.json
    video_path = data.get('videoPath')
    
    if not video_path or not os.path.exists(video_path):
        return jsonify({"error": "Invalid video path"}), 400
    
    # Initialize PhysioCare with the selected video
    physio_instance = PhysioCare()
    physio_instance.video_path = video_path
    physio_instance.cap = cv2.VideoCapture(video_path)
    
    # Start processing in a separate thread
    is_processing = True
    processing_thread = threading.Thread(target=process_frames)
    processing_thread.daemon = True
    processing_thread.start()
    
    return jsonify({"message": "Exercise session started successfully"})

@app.route('/api/stop', methods=['POST'])
def stop_exercise():
    global is_processing, physio_instance
    
    if not is_processing:
        return jsonify({"error": "No exercise session running"}), 400
    
    is_processing = False
    if physio_instance:
        if physio_instance.cap:
            physio_instance.cap.release()
    
    return jsonify({"message": "Exercise session stopped successfully"})

@app.route('/api/control', methods=['POST'])
def control_playback():
    global physio_instance
    
    if not is_processing or not physio_instance:
        return jsonify({"error": "No exercise session running"}), 400
    
    data = request.json
    action = data.get('action')
    
    if action == 'pause':
        physio_instance.paused = True
    elif action == 'play':
        physio_instance.paused = False
    elif action == 'rewind':
        physio_instance.cap.set(cv2.CAP_PROP_POS_MSEC, max(0, physio_instance.cap.get(cv2.CAP_PROP_POS_MSEC) - 5000))
    elif action == 'forward':
        physio_instance.cap.set(cv2.CAP_PROP_POS_MSEC, physio_instance.cap.get(cv2.CAP_PROP_POS_MSEC) + 10000)
    elif action == 'speed_down':
        physio_instance.playback_speed = max(0.5, physio_instance.playback_speed - 0.5)
    elif action == 'speed_up':
        physio_instance.playback_speed += 0.5
    else:
        return jsonify({"error": "Invalid action"}), 400
    
    return jsonify({"message": f"Action {action} applied successfully"})

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({
        'status': 'running',
        'physiocare_module': 'loaded' if PhysioCare is not None else 'not loaded',
        'webcam_available': True,  # You might want to check this dynamically
        'version': '1.0.0'
    })

@app.route('/api/frame')
def get_frame():
    global current_frame, current_similarity, current_video_frame
    
    if not is_processing:
        print("No active processing")
        return jsonify({"error": "No exercise session running"}), 404
        
    if current_frame is None or current_video_frame is None:
        print("Frames not available yet")
        return jsonify({"error": "Frames not available"}), 404
    
    try:
        # Convert frames to base64
        _, patient_buffer = cv2.imencode('.jpg', current_frame)
        patient_base64 = base64.b64encode(patient_buffer).decode('utf-8')
        
        _, video_buffer = cv2.imencode('.jpg', current_video_frame)
        video_base64 = base64.b64encode(video_buffer).decode('utf-8')
        
        return jsonify({
            "patientFrame": patient_base64,
            "videoFrame": video_base64,
            "similarity": float(current_similarity)
        })
    except Exception as e:
        print(f"Error in get_frame: {str(e)}")
        return jsonify({"error": f"Frame processing error: {str(e)}"}), 500

def process_frames():
    global is_processing, current_frame, current_similarity, current_video_frame, physio_instance
    
    print("Starting frame processing...")
    
    # Initialize webcam
    patient_cap = cv2.VideoCapture(0)
    if not patient_cap.isOpened():
        print("Error: Could not open webcam.")
        is_processing = False
        return
    
    print(f"Video path: {physio_instance.video_path}")
    if not physio_instance.cap.isOpened():
        print("Error: Could not open exercise video.")
        is_processing = False
        return

    while is_processing and physio_instance.cap.isOpened() and patient_cap.isOpened():
        try:
            if not physio_instance.paused:
                ret1, frame_video = physio_instance.cap.read()
                ret2, frame_patient = patient_cap.read()
                
                if not ret1 or not ret2:
                    print("Error: Could not read frames")
                    break

                # Process frames
                video_landmarks = physio_instance.extract_pose_landmarks(frame_video)
                patient_landmarks = physio_instance.extract_pose_landmarks(frame_patient)
                
                similarity = physio_instance.calculate_similarity(video_landmarks, patient_landmarks)
                
                # Update global variables with the processed frames
                current_frame = frame_patient
                current_video_frame = frame_video
                current_similarity = similarity
                
                print(f"Frame processed - Similarity: {similarity}%")
            
            time.sleep(max(0.033, 0.033 / physio_instance.playback_speed))
            
        except Exception as e:
            print(f"Error in process_frames: {str(e)}")
            break
    
    print("Frame processing stopped")
    patient_cap.release()
    is_processing = False

if __name__ == '__main__':
    app.run(debug=True, port=5000)