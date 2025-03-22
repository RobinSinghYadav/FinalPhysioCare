// import React, { useState, useRef, useEffect } from "react";
// import Webcam from "react-webcam";
// import { assets } from "../assets/assets";

// const LiveExerciseTraining = () => {
//     const [selectedExercise, setSelectedExercise] = useState("squats");
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [isCameraOn, setIsCameraOn] = useState(true);
//     const [isVideoMuted, setIsVideoMuted] = useState(true);
//     const [isCameraMuted, setIsCameraMuted] = useState(true);
//     const [videoVolume, setVideoVolume] = useState(1);
//     const [playbackSpeed, setPlaybackSpeed] = useState(1);
//     const [videoProgress, setVideoProgress] = useState(0);
//     const videoRef = useRef(null);
//     const webcamRef = useRef(null);

//     const exercises = [
//         { id: "squats", name: "Squats", videoSrc: assets.squatsVideo },
//         { id: "lunges", name: "Lunges", videoSrc: assets.lungesVideo },
//         { id: "plank", name: "Plank", videoSrc: assets.plankVideo },
//     ];

//     const [videoDimensions, setVideoDimensions] = useState({ width: null, height: null });

//     useEffect(() => {
//         const selectedExerciseData = exercises.find((exercise) => exercise.id === selectedExercise);
//         if (selectedExerciseData) {
//             const video = document.createElement("video");
//             video.preload = "metadata";
//             video.src = selectedExerciseData.videoSrc;
//             video.onloadedmetadata = () => {
//                 setVideoDimensions({ width: video.videoWidth, height: video.videoHeight });
//             };
//         } else {
//             setVideoDimensions({ width: null, height: null });
//         }
//     }, [selectedExercise]);

//     useEffect(() => {
//         const updateProgress = () => {
//             if (videoRef.current) {
//                 setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
//             }
//         };

//         if (videoRef.current) {
//             videoRef.current.addEventListener("timeupdate", updateProgress);
//         }

//         return () => {
//             if (videoRef.current) {
//                 videoRef.current.removeEventListener("timeupdate", updateProgress);
//             }
//         };
//     }, []);

//     const handleExerciseChange = (event) => {
//         setSelectedExercise(event.target.value);
//         setIsPlaying(false);
//         if (videoRef.current) {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//             setVideoProgress(0);
//         }
//     };

//     const togglePlayPause = () => {
//         if (videoRef.current) {
//             if (videoRef.current.paused || videoRef.current.ended) {
//                 videoRef.current.play();
//                 setIsPlaying(true);
//             } else {
//                 videoRef.current.pause();
//                 setIsPlaying(false);
//             }
//         }
//     };

//     const toggleVideoMute = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !videoRef.current.muted;
//             setIsVideoMuted(videoRef.current.muted);
//         }
//     };

//     const toggleCameraMute = () => {
//         setIsCameraMuted(!isCameraMuted);
//     };

//     const handleVolumeChange = (event) => {
//         const volume = parseFloat(event.target.value);
//         setVideoVolume(volume);
//         if (videoRef.current) {
//             videoRef.current.volume = volume;
//         }
//     };

//     const handlePlaybackSpeedChange = (event) => {
//         const speed = parseFloat(event.target.value);
//         setPlaybackSpeed(speed);
//         if (videoRef.current) {
//             videoRef.current.playbackRate = speed;
//         }
//     };

//     const handleResolutionChange = (event) => {
//         console.log("Resolution changed:", event.target.value);
//     };

//     const handleSeekChange = (event) => {
//         const seekTime = (parseFloat(event.target.value) / 100) * videoRef.current.duration;
//         videoRef.current.currentTime = seekTime;
//         setVideoProgress(event.target.value);
//     };

//     return (
//         <div className="container mx-auto p-6 text-center">
//             <h1 className="text-3xl font-bold mb-6">Live Exercise Training</h1>
//             <p className="mb-4 text-gray-600">Choose an exercise and follow along!</p>

//             <div className="flex justify-center items-center gap-4 mb-6">
//                 <label className="text-lg font-medium" htmlFor="exercise">Select Exercise:</label>
//                 <select
//                     id="exercise"
//                     value={selectedExercise}
//                     onChange={handleExerciseChange}
//                     className="border border-gray-300 rounded p-2"
//                 >
//                     {exercises.map((exercise) => (
//                         <option key={exercise.id} value={exercise.id}>
//                             {exercise.name}
//                         </option>
//                     ))}
//                 </select>
//                 <button
//                     onClick={togglePlayPause}
//                     className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                 >
//                     {isPlaying ? "Pause Exercise" : "Start Exercise"}
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Exercise Video with Controls */}
//                 <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100">
//                     <div style={{ width: videoDimensions.width, height: videoDimensions.height }}>
//                         {selectedExercise ? (
//                             <video
//                                 src={exercises.find((exercise) => exercise.id === selectedExercise)?.videoSrc}
//                                 ref={videoRef}
//                                 controls={false}
//                                 muted={isVideoMuted}
//                                 autoPlay={isPlaying}
//                                 className="w-full h-full object-cover rounded-lg"
//                                 onPlay={() => setIsPlaying(true)}
//                                 onPause={() => setIsPlaying(false)}
//                             />
//                         ) : (
//                             <div className="flex items-center justify-center h-full text-gray-500">
//                                 <p>Select an exercise to start</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Custom Video Controls */}
//                     <div className="flex justify-between items-center p-4">
//                         <button onClick={togglePlayPause} className="text-blue-500">
//                             {isPlaying ? "Pause" : "Play"}
//                         </button>
//                         <button onClick={toggleVideoMute} className="text-blue-500">
//                             {isVideoMuted ? "Unmute" : "Mute"}
//                         </button>
//                         <div className="flex items-center gap-2">
//                             <label>Volume</label>
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max="1"
//                                 step="0.1"
//                                 value={videoVolume}
//                                 onChange={handleVolumeChange}
//                             />
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <label>Speed</label>
//                             <select
//                                 value={playbackSpeed}
//                                 onChange={handlePlaybackSpeedChange}
//                                 className="border border-gray-300 rounded p-1"
//                             >
//                                 <option value="0.5">0.5x</option>
//                                 <option value="1">1x</option>
//                                 <option value="1.5">1.5x</option>
//                                 <option value="2">2x</option>
//                             </select>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <label>Resolution</label>
//                             <select
//                                 defaultValue="720p"
//                                 onChange={handleResolutionChange}
//                                 className="border border-gray-300 rounded p-1"
//                             >
//                                 <option value="360p">360p</option>
//                                 <option value="720p">720p</option>
//                                 <option value="1080p">1080p</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Video Progress Slider */}
//                     <div className="flex items-center p-4">
//                         <label>Progress</label>
//                         <input
//                             type="range"
//                             min="0"
//                             max="100"
//                             value={videoProgress}
//                             onChange={handleSeekChange}
//                             className="w-full ml-2"
//                         />
//                     </div>
//                 </div>

//                 {/* Webcam Placeholder with Consistent Dimensions */}
//                 <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100" style={{ width: videoDimensions.width, height: videoDimensions.height }}>
//                     {isCameraOn ? (
//                         <Webcam
//                             audio={!isCameraMuted}
//                             muted={isCameraMuted}
//                             ref={webcamRef}
//                             width={videoDimensions.width}
//                             height={videoDimensions.height}
//                             className="object-cover rounded-lg"
//                         />
//                     ) : (
//                         <div className="flex items-center justify-center h-full text-gray-500">
//                             <p>Camera is off</p>
//                         </div>
//                     )}
//                     <div className="absolute bottom-0 left-0 bg-black bg-opacity-30 text-white p-2">
//                         <button onClick={() => setIsCameraOn(!isCameraOn)} className="text-sm">
//                             {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
//                         </button>
//                         <button onClick={toggleCameraMute} className="text-sm ml-2">
//                             {isCameraMuted ? "Unmute Camera" : "Mute Camera"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LiveExerciseTraining;


import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { assets } from "../assets/assets";
import axios from "axios"; // Make sure to install axios: npm install axios

const API_URL = "http://127.0.0.1:5000/api";


const LiveExerciseTraining = () => {
    const [selectedExercise, setSelectedExercise] = useState("squats");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isVideoMuted, setIsVideoMuted] = useState(true);
    const [isCameraMuted, setIsCameraMuted] = useState(true);
    const [videoVolume, setVideoVolume] = useState(1);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [videoProgress, setVideoProgress] = useState(0);
    const [similarity, setSimilarity] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const [patientFrame, setPatientFrame] = useState(null);
    const [videoFrame, setVideoFrame] = useState(null);
    const [error, setError] = useState(null);
    
    const videoRef = useRef(null);
    const webcamRef = useRef(null);
    const frameInterval = useRef(null);

    // const exercises = [
    //     { id: "squats", name: "Squats", videoSrc: assets.squatsVideo, path: "C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\exercise_video\\30_Squats.mp4" },
    //     { id: "lunges", name: "Lunges", videoSrc: assets.lungesVideo, path: "C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\exercise_video\\Jumping_Jacks2.mp4" },
    //     { id: "plank", name: "Plank", videoSrc: assets.plankVideo, path: "C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\exercise_video\\Lunges1.mp4" },
    // ];
    const exercises = [
                { id: "squats", name: "Squats", videoSrc: assets.squatsVideo, path:"C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\frontend\\src\\assets\\videos\\squats.mp4" },
                { id: "lunges", name: "Lunges", videoSrc: assets.lungesVideo, path:"C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\frontend\\src\\assets\\videos\\lunges.mp4" },
                { id: "plank", name: "Plank", videoSrc: assets.plankVideo, path:"C:\\Users\\DELL\\Desktop\\FinalPhysioCare\\frontend\\src\\assets\\videos\\plank.mp4" },
            ];

    

    const [videoDimensions, setVideoDimensions] = useState({ width: 640, height: 480 });

    useEffect(() => {
        const selectedExerciseData = exercises.find((exercise) => exercise.id === selectedExercise);
        if (selectedExerciseData) {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = selectedExerciseData.videoSrc;
            video.onloadedmetadata = () => {
                setVideoDimensions({ width: video.videoWidth, height: video.videoHeight });
            };
        } else {
            setVideoDimensions({ width: 640, height: 480 });
        }
    }, [selectedExercise]);

    useEffect(() => {
        const updateProgress = () => {
            if (videoRef.current) {
                setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
            }
        };

        if (videoRef.current) {
            videoRef.current.addEventListener("timeupdate", updateProgress);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("timeupdate", updateProgress);
            }
        };
    }, []);

    // Clean up on component unmount
    useEffect(() => {
        return () => {
            if (isConnected) {
                stopExercise();
            }
            if (frameInterval.current) {
                clearInterval(frameInterval.current);
            }
        };
    }, [isConnected]);

    const handleExerciseChange = (event) => {
        setSelectedExercise(event.target.value);
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setVideoProgress(0);
        }
        
        // If connected to the API, stop the current exercise
        if (isConnected) {
            stopExercise();
        }
    };

    const startExercise = async () => {
        try {
            setError(null);
            const selectedExerciseData = exercises.find((exercise) => exercise.id === selectedExercise);
            
            console.log("Starting exercise with path:", selectedExerciseData.path);
            
            // Start the exercise session on the backend
            const response = await axios.post(`${API_URL}/start`, {
                videoPath: selectedExerciseData.path
            });
            
            console.log("Start exercise response:", response.data);
            
            if (response.data.error) {
                setError(response.data.error);
                return;
            }
            
            setIsConnected(true);
            setIsPlaying(true);
            
            // Start polling for frames with a longer interval
            if (frameInterval.current) {
                clearInterval(frameInterval.current);
            }
            
            // Give the backend some time to initialize
            setTimeout(() => {
                frameInterval.current = setInterval(fetchFrames, 200); // Poll every 200ms instead of 100ms
            }, 1000);
            
        } catch (err) {
            console.error("Error starting exercise:", err.response?.data || err.message);
            setError(`Failed to start exercise: ${err.response?.data?.error || err.message}`);
            setIsConnected(false);
        }
    };

    const stopExercise = async () => {
        try {
            if (isConnected) {
                await axios.post(`${API_URL}/stop`);
                setIsConnected(false);
                setIsPlaying(false);
                
                if (frameInterval.current) {
                    clearInterval(frameInterval.current);
                    frameInterval.current = null;
                }
            }
        } catch (err) {
            console.error("Error stopping exercise:", err);
        }
    };

    const fetchFrames = async () => {
        try {
            console.log("Fetching frames...");
            const response = await axios.get(`${API_URL}/frame`);
            console.log("Frame response:", response.data);
            
            if (response.data.error) {
                console.error("API Error:", response.data.error);
                return;
            }
            
            if (!response.data.patientFrame || !response.data.videoFrame) {
                console.error("Missing frame data:", response.data);
                return;
            }

            // Check if the base64 strings are valid
            if (typeof response.data.patientFrame !== 'string' || typeof response.data.videoFrame !== 'string') {
                console.error("Invalid frame data type:", {
                    patientFrame: typeof response.data.patientFrame,
                    videoFrame: typeof response.data.videoFrame
                });
                return;
            }

            setPatientFrame(`data:image/jpeg;base64,${response.data.patientFrame}`);
            setVideoFrame(`data:image/jpeg;base64,${response.data.videoFrame}`);
            setSimilarity(response.data.similarity || 0);
            
        } catch (err) {
            console.error("Error fetching frames:", err.response?.data || err.message);
            if (frameInterval.current && err.response?.status === 500) {
                clearInterval(frameInterval.current);
                frameInterval.current = null;
                setError("Error processing video frames. Please try again.");
                setIsConnected(false);
            }
        }
    };

    const togglePlayPause = async () => {
        if (!isConnected) {
            // If not connected, start the exercise
            await startExercise();
            return;
        }
        
        try {
            await axios.post(`${API_URL}/control`, {
                action: isPlaying ? 'pause' : 'play'
            });
            setIsPlaying(!isPlaying);
        } catch (err) {
            console.error("Error toggling play/pause:", err);
        }
    };

    const handlePlaybackSpeedChange = async (event) => {
        const speed = parseFloat(event.target.value);
        setPlaybackSpeed(speed);
        
        if (isConnected) {
            try {
                // Adjust speed on the backend
                if (speed > playbackSpeed) {
                    await axios.post(`${API_URL}/control`, { action: 'speed_up' });
                } else if (speed < playbackSpeed) {
                    await axios.post(`${API_URL}/control`, { action: 'speed_down' });
                }
            } catch (err) {
                console.error("Error changing playback speed:", err);
            }
        }
    };

    const handleSeekChange = async (event) => {
        const seekValue = parseFloat(event.target.value);
        setVideoProgress(seekValue);
        
        if (isConnected) {
            try {
                // Seek on the backend
                if (seekValue > videoProgress) {
                    await axios.post(`${API_URL}/control`, { action: 'forward' });
                } else if (seekValue < videoProgress) {
                    await axios.post(`${API_URL}/control`, { action: 'rewind' });
                }
            } catch (err) {
                console.error("Error seeking:", err);
            }
        }
    };

        // Add this function to your component
        const testApiConnection = async () => {
            try {
                const response = await axios.get(`${API_URL}/status`);
                console.log("API Status:", response.data);
                alert(`API Status: ${JSON.stringify(response.data)}`);
            } catch (err) {
                console.error("API Connection Error:", err);
                alert(`API Connection Error: ${err.message}`);
            }
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
                    onClick={togglePlayPause}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    {isPlaying ? "Pause Exercise" : "Start Exercise"}
                </button>
                {isConnected && (
                    <button
                        onClick={stopExercise}
                        className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Stop Exercise
                    </button>
                )}
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Exercise Video */}
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100">
                    {isConnected ? (
                        videoFrame ? (
                            <img 
                                src={videoFrame} 
                                alt="Exercise Video" 
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-64 text-gray-500">
                                Loading exercise video...
                            </div>
                        )
                    ) : (
                        <div style={{ width: videoDimensions.width, height: videoDimensions.height }}>
                            {selectedExercise ? (
                                <video
                                    src={exercises.find((exercise) => exercise.id === selectedExercise)?.videoSrc}
                                    ref={videoRef}
                                    controls={false}
                                    muted={isVideoMuted}
                                    autoPlay={isPlaying}
                                    className="w-full h-full object-cover rounded-lg"
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    <p>Select an exercise to start</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Custom Video Controls */}
                    <div className="flex justify-between items-center p-4">
                        <button onClick={togglePlayPause} className="text-blue-500">
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                        <button onClick={() => setIsVideoMuted(!isVideoMuted)} className="text-blue-500">
                            {isVideoMuted ? "Unmute" : "Mute"}
                        </button>
                        <div className="flex items-center gap-2">
                            <label>Volume</label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={videoVolume}
                                onChange={(e) => setVideoVolume(parseFloat(e.target.value))}
                                disabled={isConnected}
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
                    </div>

                    {/* Video Progress Slider */}
                    <div className="flex items-center p-4">
                        <label>Progress</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={videoProgress}
                            onChange={handleSeekChange}
                            className="w-full ml-2"
                        />
                    </div>
                </div>

                {/* Webcam/Patient View */}
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-100" style={{ width: videoDimensions.width, height: videoDimensions.height }}>
                    {isConnected ? (
                        patientFrame ? (
                            <div className="relative">
                                <img 
                                    src={patientFrame} 
                                    alt="Patient View" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                                    Similarity: {similarity.toFixed(2)}%
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64 text-gray-500">
                                Loading patient view...
                            </div>
                        )
                    ) : (
                        isCameraOn ? (
                            <Webcam
                                audio={!isCameraMuted}
                                muted={isCameraMuted}
                                ref={webcamRef}
                                width={videoDimensions.width}
                                height={videoDimensions.height}
                                className="object-cover rounded-lg"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-500">
                                <p>Camera is off</p>
                            </div>
                        )
                    )}
                    
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-30 text-white p-2">
                        {!isConnected && (
                            <>
                                <button onClick={() => setIsCameraOn(!isCameraOn)} className="text-sm">
                                    {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
                                </button>
                                <button onClick={() => setIsCameraMuted(!isCameraMuted)} className="text-sm ml-2">
                                    {isCameraMuted ? "Unmute Camera" : "Mute Camera"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            
            {isConnected && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Exercise Feedback</h3>
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md bg-white rounded-full h-6 shadow-inner">
                            <div 
                                className={`h-6 rounded-full ${similarity >= 70 ? 'bg-green-500' : 'bg-red-500'}`}
                                style={{ width: `${similarity}%` }}
                            ></div>
                        </div>
                        <span className="ml-4 font-bold">{similarity.toFixed(2)}%</span>
                    </div>
                    <p className="mt-2">
                        {similarity >= 70 
                            ? "Great job! Keep up the good form." 
                            : "Try to match the exercise position more closely."}
                    </p>
                    
        <button
            onClick={testApiConnection}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
            Test API
        </button>
                </div>
            )}
        </div>
    );
};

export default LiveExerciseTraining;
        
