import React, { useRef } from "react";

function AudioPlayer({ audioSrc, onEnded }) {

  const audioRef = useRef(null);

  return (
    <>
      <audio controls autoPlay ref={audioRef} onEnded={onEnded}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default AudioPlayer;
