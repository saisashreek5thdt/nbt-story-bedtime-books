"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AudioPlayer from "./AudioPlayer";
import Modal from "./Modal";
import LanguageBox from "./LanguageBox";
import PageNextBox from "./PageNextBox";

function FooterStory({
  onPrev,
  onNext,
  pageNum1,
  pageNum2,
  audioSRC,
  YESBTN,
  NOBTN,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAudioModal = () => setIsAudioModalOpen(true);
  const closeAudioModal = () => setIsAudioModalOpen(false);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    handleAudioControls();
  };

  const handleAudioControls = () => {
    openAudioModal;
  };

  const navigate = useRouter();

  const pageHandler = (e) => {
    e.preventDefault();
    navigate.push("/");
  };

  return (
    <>
      
    </>
  );
}

export default FooterStory;
