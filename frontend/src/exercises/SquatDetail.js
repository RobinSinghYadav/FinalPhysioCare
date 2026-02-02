import React from 'react';
import YouTube from 'react-youtube';

const SquatDetail = () => {
  const videoId = 'UXJrBgI2RxA'; // Squat video ID
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="container mx-auto p-4">
      <YouTube videoId={videoId} opts={opts} />
      <h2 className="text-2xl font-bold mt-4">Squat Details</h2>
      <p><strong>Steps:</strong></p>
      <ol>
        <li>Stand with feet shoulder-width apart.</li>
        <li>Lower your hips as if sitting in a chair.</li>
        <li>Keep your back straight and chest up.</li>
        <li>Return to the starting position.</li>
      </ol>
      <p><strong>Cautions:</strong></p>
      <ul>
        <li>Avoid rounding your back.</li>
        <li>Ensure your knees don't go past your toes.</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Strengthens leg muscles.</li>
        <li>Improves core stability.</li>
      </ul>
    </div>
  );
};

export default SquatDetail;