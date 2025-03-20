// import React from 'react';

// const VirtualExercise = () => {
//   const exercises = [
//     {
//       name: 'Squats',
//       description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
//       video: 'https://www.example.com/squat-video.mp4',
//       benefits: 'Strengthens leg muscles, improves core stability.',
//     },
//     {
//       name: 'Push-ups',
//       description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
//       video: 'https://www.example.com/pushup-video.mp4',
//       benefits: 'Strengthens chest, shoulders, and triceps.',
//     },
//     {
//       name: 'Plank',
//       description: 'Hold a position similar to a push-up, but rest on your forearms.',
//       video: 'https://www.example.com/plank-video.mp4',
//       benefits: 'Strengthens core muscles, improves posture.',
//     },
//     {
//       name: 'Lunges',
//       description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
//       video: 'https://www.example.com/lunge-video.mp4',
//       benefits: 'Strengthens leg and glute muscles, improves balance.',
//     },
//     {
//       name: 'Bicycle Crunches',
//       description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
//       video: 'https://www.example.com/bicycle-crunch-video.mp4',
//       benefits: 'Strengthens abdominal muscles, improves core rotation.',
//     },
//     {
//       name: 'Jumping Jacks',
//       description: 'Start with feet together, jump while spreading feet and raising arms.',
//       video: 'https://www.example.com/jumping-jacks-video.mp4',
//       benefits: 'Improves cardiovascular health, full-body warm-up.',
//     },
//     {
//       name: 'Mountain Climbers',
//       description: 'Start in plank position, bring knees towards chest in an alternating motion.',
//       video: 'https://www.example.com/mountain-climbers-video.mp4',
//       benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
//     },
//     {
//       name: 'Glute Bridges',
//       description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
//       video: 'https://www.example.com/glute-bridges-video.mp4',
//       benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
//     },
//     {
//       name: 'Russian Twists',
//       description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
//       video: 'https://www.example.com/russian-twists-video.mp4',
//       benefits: 'Strengthens obliques and core, improves rotational strength.',
//     },
//   ];

//   const exerciseStyle = {
//     border: '1px solid #ddd',
//     padding: '15px',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   };

//   const exerciseHoverStyle = {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Virtual Exercise Library</h1>
//       <p>Here are some exercises to help you stay active:</p>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
//         {exercises.map((exercise, index) => (
//           <div
//             key={index}
//             style={{ ...exerciseStyle }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = exerciseHoverStyle.transform;
//               e.currentTarget.style.boxShadow = exerciseHoverStyle.boxShadow;
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'none';
//               e.currentTarget.style.boxShadow = 'none';
//             }}
//           >
//             <h2>{exercise.name}</h2>
//             <p><strong>Description:</strong> {exercise.description}</p>
//             <p><strong>Benefits:</strong> {exercise.benefits}</p>
//             {exercise.video && (
//               <video width="100%" controls>
//                 <source src={exercise.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VirtualExercise;
import React from 'react';

const VirtualExercise = () => {
  const exercises = [
    {
      name: 'Squats',
      description: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair.',
      video: 'https://www.example.com/squat-video.mp4',
      benefits: 'Strengthens leg muscles, improves core stability.',
    },
    {
      name: 'Push-ups',
      description: 'Start in a plank position, lower your body until your chest nearly touches the floor.',
      video: 'https://www.example.com/pushup-video.mp4',
      benefits: 'Strengthens chest, shoulders, and triceps.',
    },
    {
      name: 'Plank',
      description: 'Hold a position similar to a push-up, but rest on your forearms.',
      video: 'https://www.example.com/plank-video.mp4',
      benefits: 'Strengthens core muscles, improves posture.',
    },
    {
      name: 'Lunges',
      description: 'Step forward with one leg, lowering your hips until both knees are at 90 degrees.',
      video: 'https://www.example.com/lunge-video.mp4',
      benefits: 'Strengthens leg and glute muscles, improves balance.',
    },
    {
      name: 'Bicycle Crunches',
      description: 'Lie on your back, bring opposite elbow to knee in a pedaling motion.',
      video: 'https://www.example.com/bicycle-crunch-video.mp4',
      benefits: 'Strengthens abdominal muscles, improves core rotation.',
    },
    {
      name: 'Jumping Jacks',
      description: 'Start with feet together, jump while spreading feet and raising arms.',
      video: 'https://www.example.com/jumping-jacks-video.mp4',
      benefits: 'Improves cardiovascular health, full-body warm-up.',
    },
    {
      name: 'Mountain Climbers',
      description: 'Start in plank position, bring knees towards chest in an alternating motion.',
      video: 'https://www.example.com/mountain-climbers-video.mp4',
      benefits: 'Strengthens core, shoulders, and legs, increases heart rate.',
    },
    {
      name: 'Glute Bridges',
      description: 'Lie on your back, lift hips off the floor, squeezing glutes.',
      video: 'https://www.example.com/glute-bridges-video.mp4',
      benefits: 'Strengthens glutes and hamstrings, improves hip stability.',
    },
    {
      name: 'Russian Twists',
      description: 'Sit with knees bent, lean back slightly, twist torso side to side.',
      video: 'https://www.example.com/russian-twists-video.mp4',
      benefits: 'Strengthens obliques and core, improves rotational strength.',
    },
  ];

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
            <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
            <p><strong>Description:</strong> {exercise.description}</p>
            <p><strong>Benefits:</strong> {exercise.benefits}</p>
            {exercise.video && (
              <video width="100%" controls className="pointer-events-none mb-4">
                <source src={exercise.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View in Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualExercise;