import { useState, useEffect } from "react";
import Modal from "./Modal";
import PageNextBox from "./PageNextBox";

const MovingSubtitle = ({ text, speed, audioSrc, nextPage, YESBTN }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audio] = useState(new Audio(audioSrc));

  const moveSubtitle = () => {
    setSubtitleIndex((prevIndex) => {
      if (prevIndex < text.length - 1) {
        return prevIndex + 1;
      } else {
        setIsAudioPlaying(false);
        setTimeout(() => {
          setIsModalOpen(true); // Show modal when subtitle completes
        }, 5000);
        return prevIndex;
      }
    });
  };

  const handleAudioClick = () => {
    setSubtitleIndex(0);
    setIsAudioPlaying(true);
    audio.currentTime = 0;
    audio.play();
  };

  const handleYesClick = () => {
    // Stop audio playback immediately
    audio.pause();
    audio.currentTime = 0; // Reset audio position

    setIsModalOpen(false);
    nextPage(); // Move to the next page
  };

  const handleNoClick = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsModalOpen(false);
  };

  const restartSubtitleAndAudio = () => {
    setSubtitleIndex(0);
    setIsAudioPlaying(true);
    audio.currentTime = 0; // Reset audio
    audio.play();
  };

  useEffect(() => {
    if (isAudioPlaying) {
      const interval = setInterval(() => {
        moveSubtitle();
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isAudioPlaying, text, speed]);

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsAudioPlaying(false);
      setTimeout(() => {
        setIsModalOpen(true); // Show modal after audio ends
      }, 4000);
    };

    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [audio]);

  return (
    <>
      <div
        onClick={handleAudioClick}
        className="overflow-hidden bg-slate-200 opacity-65 h-12 font-medium -mt-32 flex items-center justify-center"
      >
        <div className="whitespace-nowrap">
          <p className="text-3xl inline-block animate-scroll  w-full">
            {text.slice(0, subtitleIndex)}
          </p>
        </div>

      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          titleName="Do You Want To Continue?"
          body={<PageNextBox onYesBTN={handleYesClick} onNoBTN={handleNoClick} />}
        />
      )}
    </>

  );
};

export default MovingSubtitle;