import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { assets } from "../assets/assets";

const LiveExerciseTraining = () => {
    const [selectedExercise, setSelectedExercise] = useState("squats");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [videoVolume, setVideoVolume] = useState(1);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const videoRef = useRef(null);
    const webcamRef = useRef(null);

    const exercises = [
        { id: "squats", name: "Squats", videoSrc: assets.squatsVideo },
        { id: "lunges", name: "Lunges", videoSrc: assets.lungesVideo },
        { id: "plank", name: "Plank", videoSrc: assets.plankVideo },
    ];

    const [videoDimensions, setVideoDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        // Get video dimensions on exercise change
        const selectedExerciseData = exercises.find((exercise) => exercise.id === selectedExercise);
        if (selectedExerciseData) {
            const video = document.createElement("video"); // Create a video element
            video.preload = "metadata";
            video.src = selectedExerciseData.videoSrc;
            video.onloadedmetadata = () => {
                setVideoDimensions({ width: video.videoWidth, height: video.videoHeight });
            };
        } else {
            setVideoDimensions({ width: null, height: null });
        }
    }, [selectedExercise]);

    const handleExerciseChange = (event) => {
        setSelectedExercise(event.target.value);
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!videoRef.current.paused);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        setVideoVolume(volume);
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    };

    const handlePlaybackSpeedChange = (event) => {
        const speed = parseFloat(event.target.value);
        setPlaybackSpeed(speed);
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    };

    const handleResolutionChange = (event) => {
        console.log("Resolution changed:", event.target.value);
        // Implement logic to change video resolution based on selected option
    };

    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-6">Live Exercise Training</h1>
            <p className="mb-4 text-gray-600">Choose an exercise and follow along!</p>

            <div className="flex justify-center items-center gap-4 mb-6">
                <label className="text-lg font-medium" htmlFor="exercise">Select Exercise:</label>
                <select
                    id="exercise"
                    value={selectedExercise}
                    onChange={handleExerciseChange}
                    className="border border-gray-300 rounded p-2"
                >
                    {exercises.map((exercise) => (
                        <option key={exercise.id} value={exercise.id}>
                            {exercise.name}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => setIsPlaying(true)}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Start Exercise
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Exercise Video with Controls */}
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100">
                    <div style={{ width: videoDimensions.width, height: videoDimensions.height }}>
                        {isPlaying ? (
                            <video
                                src={
                                    exercises.find((exercise) => exercise.id === selectedExercise)?.videoSrc
                                }
                                ref={videoRef}
                                controls={false}
                                autoPlay
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-500">
                                <p>Select an exercise to start</p>
                            </div>
                        )}
                    </div>

                    {/* Custom Video Controls */}
                    <div className="flex justify-between items-center p-4">
                        <button onClick={togglePlayPause} className="text-blue-500">
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                        <button onClick={toggleMute} className="text-blue-500">
                            {isMuted ? "Unmute" : "Mute"}
                        </button>
                        <div className="flex items-center gap-2">
                            <label>Volume</label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={videoVolume}
                                onChange={handleVolumeChange}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label>Speed</label>
                            <select
                                value={playbackSpeed}
                                onChange={handlePlaybackSpeedChange}
                                className="border border-gray-300 rounded p-1"
                            >
                                <option value="0.5">0.5x</option>
                                <option value="1">1x</option>
                                <option value="1.5">1.5x</option>
                                <option value="2">2x</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label>Resolution</label>
                            <select
                                defaultValue="720p" // Default resolution
                                onChange={handleResolutionChange}
                                className="border border-gray-300 rounded p-1"
                            >
                                <option value="360p">360p</option>
                                <option value="720p">720p</option>
                                <option value="1080p">1080p</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Webcam Placeholder with Consistent Dimensions */}
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100" style={{ width: videoDimensions.width, height: videoDimensions.height }}>
                    {isCameraOn ? (
                        <Webcam
                            audio={true}
                            muted={isMuted}
                            ref={webcamRef}
                            width={videoDimensions.width}
                            height={videoDimensions.height}
                            className="object-cover rounded-lg"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <p>Camera is off</p>
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-30 text-white p-2">
                        <button onClick={() => setIsCameraOn(!isCameraOn)} className="text-blue-500 mr-4">
                            {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
                        </button>
                        <button onClick={() => setIsMuted(!isMuted)} className="text-blue-500">
                            {isMuted ? "Unmute Mic" : "Mute Mic"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveExerciseTraining;
