// // import React from 'react';

// // const VirtualExercise = () => {
// //   const exercises = [
// //     {
// //       name: 'Squats',
// //       description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
// //       video: 'https://www.example.com/squat-video.mp4',
// //       benefits: 'Strengthens leg muscles, improves core stability.',
// //     },
// //     {
// //       name: 'Push-ups',
// //       description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
// //       video: 'https://www.example.com/pushup-video.mp4',
// //       benefits: 'Strengthens chest, shoulders, and triceps.',
// //     },
// //     {
// //       name: 'Plank',
// //       description: 'Hold a position similar to a push-up, but rest on your forearms.',
// //       video: 'https://www.example.com/plank-video.mp4',
// //       benefits: 'Strengthens core muscles, improves posture.',
// //     },
// //     {
// //       name: 'Lunges',
// //       description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
// //       video: 'https://www.example.com/lunge-video.mp4',
// //       benefits: 'Strengthens leg and glute muscles, improves balance.',
// //     },
// //     {
// //       name: 'Bicycle Crunches',
// //       description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
// //       video: 'https://www.example.com/bicycle-crunch-video.mp4',
// //       benefits: 'Strengthens abdominal muscles, improves core rotation.',
// //     },
// //     {
// //       name: 'Jumping Jacks',
// //       description: 'Start with feet together, jump while spreading feet and raising arms.',
// //       video: 'https://www.example.com/jumping-jacks-video.mp4',
// //       benefits: 'Improves cardiovascular health, full-body warm-up.',
// //     },
// //     {
// //       name: 'Mountain Climbers',
// //       description: 'Start in plank position, bring knees towards chest in an alternating motion.',
// //       video: 'https://www.example.com/mountain-climbers-video.mp4',
// //       benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
// //     },
// //     {
// //       name: 'Glute Bridges',
// //       description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
// //       video: 'https://www.example.com/glute-bridges-video.mp4',
// //       benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
// //     },
// //     {
// //       name: 'Russian Twists',
// //       description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
// //       video: 'https://www.example.com/russian-twists-video.mp4',
// //       benefits: 'Strengthens obliques and core, improves rotational strength.',
// //     },
// //   ];

// //   const exerciseStyle = {
// //     border: '1px solid #ddd',
// //     padding: '15px',
// //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //   };

// //   const exerciseHoverStyle = {
// //     transform: 'translateY(-5px)',
// //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Virtual Exercise Library</h1>
// //       <p>Here are some exercises to help you stay active:</p>
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
// //         {exercises.map((exercise, index) => (
// //           <div
// //             key={index}
// //             style={{ ...exerciseStyle }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = exerciseHoverStyle.transform;
// //               e.currentTarget.style.boxShadow = exerciseHoverStyle.boxShadow;
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = 'none';
// //               e.currentTarget.style.boxShadow = 'none';
// //             }}
// //           >
// //             <h2>{exercise.name}</h2>
// //             <p><strong>Description:</strong> {exercise.description}</p>
// //             <p><strong>Benefits:</strong> {exercise.benefits}</p>
// //             {exercise.video && (
// //               <video width="100%" controls>
// //                 <source src={exercise.video} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VirtualExercise;





// // import React from 'react';

// // const VirtualExercise = () => {
// //   const exercises = [
// //     {
// //       name: 'Squats',
// //       description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
// //       video: 'https://www.youtube.com/watch?v=qNW9CC1Jd8E', // Replaced with the youtube link.
// //       benefits: 'Strengthens leg muscles, improves core stability.',
// //     },
// //     {
// //       name: 'Push-ups',
// //       description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
// //       video: 'https://www.youtube.com/watch?v=IODUxYQqR_g',
// //       benefits: 'Strengthens chest, shoulders, and triceps.',
// //     },
// //     {
// //       name: 'Plank',
// //       description: 'Hold a position similar to a push-up, but rest on your forearms.',
// //       video: 'https://www.youtube.com/watch?v=pSHjTRCQxIw',
// //       benefits: 'Strengthens core muscles, improves posture.',
// //     },
// //     {
// //       name: 'Lunges',
// //       description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
// //       video: 'https://www.youtube.com/watch?v=wrwwXE_x-EU',
// //       benefits: 'Strengthens leg and glute muscles, improves balance.',
// //     },
// //     {
// //       name: 'Bicycle Crunches',
// //       description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
// //       video: 'https://www.youtube.com/watch?v=ICrJAl-v1zs',
// //       benefits: 'Strengthens abdominal muscles, improves core rotation.',
// //     },
// //     {
// //       name: 'Jumping Jacks',
// //       description: 'Start with feet together, jump while spreading feet and raising arms.',
// //       video: 'https://www.youtube.com/watch?v=UpYhxD66e6o',
// //       benefits: 'Improves cardiovascular health, full-body warm-up.',
// //     },
// //     {
// //       name: 'Mountain Climbers',
// //       description: 'Start in plank position, bring knees towards chest in an alternating motion.',
// //       video: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
// //       benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
// //     },
// //     {
// //       name: 'Glute Bridges',
// //       description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
// //       video: 'https://www.youtube.com/watch?v=W29a-VzG2iI',
// //       benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
// //     },
// //     {
// //       name: 'Russian Twists',
// //       description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
// //       video: 'https://www.youtube.com/watch?v=NeAtimSC5w0',
// //       benefits: 'Strengthens obliques and core, improves rotational strength.',
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold text-center mb-8">Virtual Exercise Library</h1>
// //       <p className="text-center">Here are some exercises to help you stay active:</p>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
// //         {exercises.map((exercise, index) => (
// //           <div
// //             key={index}
// //             className="cursor-pointer p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-80"
// //           >
// //             <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
// //             <p><strong>Description:</strong> {exercise.description}</p>
// //             <p><strong>Benefits:</strong> {exercise.benefits}</p>
// //             {exercise.video && (
// //               <video width="100%" controls className="pointer-events-none mb-4">
// //                 <source src={exercise.video} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
// //             )}
// //             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// //               View in Detail
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VirtualExercise;


// import React from 'react';
// import YouTube from 'react-youtube';

// const VirtualExercise = () => {
//   const exercises = [
//     {
//       name: 'Squats',
//       description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
//       videoId: 'UXJrBgI2RxA', // YouTube video ID
//       benefits: 'Strengthens leg muscles, improves core stability.',
//     },
//     {
//       name: 'Push-ups',
//       description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
//       videoId: 'Eh00_rniF8E', // YouTube video ID
//       benefits: 'Strengthens chest, shoulders, and triceps.',
//     },
//     {
//       name: 'Plank',
//       description: 'Hold a position similar to a push-up, but rest on your forearms.',
//       videoId: 'pSHjTRCQxIw', // YouTube video ID
//       benefits: 'Strengthens core muscles, improves posture.',
//     },
//     {
//       name: 'Lunges',
//       description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
//       videoId: 'wrwwXE_x-pQ', // YouTube video ID
//       benefits: 'Strengthens leg and glute muscles, improves balance.',
//     },
//     {
//       name: 'Bicycle Crunches',
//       videoId: 'Iwyvozckjak',//youtube video ID
//       description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
//       benefits: 'Strengthens abdominal muscles, improves core rotation.',
//     },
//     {
//       name: 'Jumping Jacks',
//       videoId: '-O7z3ilCu-s',//youtube video ID
//       description: 'Start with feet together, jump while spreading feet and raising arms.',
//       benefits: 'Improves cardiovascular health, full-body warm-up.',
//     },
//     {
//       name: 'Mountain Climbers',
//       videoId: 'nmwgirgXLYM',//youtube video ID
//       description: 'Start in plank position, bring knees towards chest in an alternating motion.',
//       benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
//     },
//     {
//       name: 'Glute Bridges',
//       videoId: 'Q_Bpj91Yiis',//youtube video ID
//       description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
//       benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
//     },
//     {
//       name: 'Russian Twists',
//       videoId: 'nhFynCkYtD4',//youtube video ID
//       description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
//       benefits: 'Strengthens obliques and core, improves rotational strength.',
//     },
//   ];

//   const opts = {
//     height: '200',
//     width: '320',
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-8">Virtual Exercise Library</h1>
//       <p className="text-center">Here are some exercises to help you stay active:</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//         {exercises.map((exercise, index) => (
//           <div
//             key={index}
//             className="cursor-pointer p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-80"
//           >
//             <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
//             <p><strong>Description:</strong> {exercise.description}</p>
//             <p><strong>Benefits:</strong> {exercise.benefits}</p>
//             <YouTube videoId={exercise.videoId} opts={opts} />
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//               View in Detail
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VirtualExercise;




import React from 'react';
import YouTube from 'react-youtube';

const VirtualExercise = () => {
  const exercises = [
    {
      name: 'Squats',
      videoId: 'UXJrBgI2RxA',
      description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
      benefits: 'Strengthens leg muscles, improves core stability.',
    },
    {
      name: 'Push-ups',
      videoId: 'Eh00_rniF8E',
      description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
      benefits: 'Strengthens chest, shoulders, and triceps.',
    },
    {
      name: 'Plank',
      videoId: 'pSHjTRCQxIw',
      description: 'Hold a position similar to a push-up, but rest on your forearms.',
      benefits: 'Strengthens core muscles, improves posture.',
    },
    {
      name: 'Lunges',
      videoId: 'wrwwXE_x-pQ',
      description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
      benefits: 'Strengthens leg and glute muscles, improves balance.',
    },
    {
      name: 'Bicycle Crunches',
      videoId: 'Iwyvozckjak',
      description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
      benefits: 'Strengthens abdominal muscles, improves core rotation.',
    },
    {
      name: 'Jumping Jacks',
      videoId: '-O7z3ilCu-s',
      description: 'Start with feet together, jump while spreading feet and raising arms.',
      benefits: 'Improves cardiovascular health, full-body warm-up.',
    },
    {
      name: 'Mountain Climbers',
      videoId: 'nmwgirgXLYM',
      description: 'Start in plank position, bring knees towards chest in an alternating motion.',
      benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
    },
    {
      name: 'Glute Bridges',
      videoId: 'Q_Bpj91Yiis',
      description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
      benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
    },
    {
      name: 'Russian Twists',
      videoId: 'nhFynCkYtD4',
      description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
      benefits: 'Strengthens obliques and core, improves rotational strength.',
    },
  ];

  const opts = {
    height: '240', // Increased height
    width: '100%', // Full width
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Virtual Exercise Library</h1>
      <p className="text-center">Here are some exercises to help you stay active:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="cursor-pointer p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-80"
          >
            <YouTube videoId={exercise.videoId} opts={opts} />
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
              <p><strong>Description:</strong> {exercise.description}</p>
              <p><strong>Benefits:</strong> {exercise.benefits}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View in Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualExercise;