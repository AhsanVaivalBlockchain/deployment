'use client';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
  ];

  const profitMessages = [
    "Round 1 complete and 1st profit done Profit: ₨150",
    "Round 2 complete and Profit: ₨220",
    "Round 3 complete and Profit: ₨310",
    "Round 4 complete and Profit: ₨420",
    "Round 5 complete and Profit: ₨510",
    "Round 6 complete and Profit: ₨720",
    "Round 7 complete and Profit: ₨1420",
    "Round 8 complete and Profit: ₨2500"
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextVideo = () => {
    if (!isVideoEnded) return;

    if (currentVideo < videoUrls.length - 1) {
      setCurrentVideo(currentVideo + 1);
      setIsVideoEnded(false);
    } else {
      setShowMessage(true);
      setIsRoundComplete(true);

      // Wait 3 seconds before allowing the user to start the next round
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const nextRound = () => {
    setIsRoundComplete(false);
    setCurrentRound((prevRound) => (prevRound + 1) % profitMessages.length);
    setCurrentVideo(0);
    setIsVideoEnded(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-10 px-4">
      <div className="w-full max-w-2xl">
        {!showMessage ? (
          isClient ? (
            <ReactPlayer
              url={videoUrls[currentVideo]}
              playing={true}
              controls={false} // Disable controls to prevent skipping
              width="100%"
              height="250px"
              onEnded={handleVideoEnd}
            />
          ) : (
            <p className="text-white text-center">Loading video...</p>
          )
        ) : (
          <div className="text-white text-xl font-bold text-center p-6">
            {profitMessages[currentRound]}
          </div>
        )}
      </div>

      {!showMessage && !isRoundComplete && (
        <button
          onClick={nextVideo}
          disabled={!isVideoEnded}
          className={`mt-4 py-2 px-6 rounded-lg transition ${
            !isVideoEnded ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'
          }`}
        >
          Next Video
        </button>
      )}

      {isRoundComplete && showMessage && (
        <button
          onClick={nextRound}
          className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
        >
          Start Next Round
        </button>
      )}
    </div>
  );
};

export default Videos;
