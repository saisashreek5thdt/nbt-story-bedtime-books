"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  StopCircle,
  Languages,
} from "lucide-react";
import Image from "next/image";
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
    <div className="flex justify-center mt-5 items-center ">
      <div className="fixed w-96 mt-10 rounded-full h-16 bg-gray-500 text-white flex items-center justify-center">
        <div className="pl-4 flex items-center justify-between gap-4 select-none">
          <h1 className="font-medium text-lg">{pageNum1}</h1>
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer"
            onClick={onPrev}
          >
            <ChevronLeft className="text-2xl" />
          </div>
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer"
            onClick={openModal}
          >
            <Languages className="text-2xl" />
          </div>
        </div>
        {/* <div
          className="flex items-center ml-6 justify-center gap-10 cursor-pointer"
          onClick={pageHandler}
        >
          <Image
            src="/images/icons/moon-icon.png"
            alt="moon"
            width={56}
            height={56}
            quality={100}
            className="w-14 h-14 absolute bottom-10 hover:animate-spin"
          />
          <h1 className="py-10 mt-5">Index</h1>
        </div> */}
        <div className="pr-4 ml-6 flex items-center justify-between gap-4">
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full animate-pulse cursor-pointer"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <StopCircle className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </div>
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer"
            onClick={onNext}
          >
            <ChevronRight className="text-2xl" />
          </div>
          <h1 className="font-medium text-lg select-none">{pageNum2}</h1>
        </div>
      </div>
      </div>
      {isPlaying && (
        <AudioPlayer audioSrc={audioSRC} onEnded={openAudioModal} />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        titleName="Select Your Language"
        body={<LanguageBox />}
      />
      <Modal
        isOpen={isAudioModalOpen}
        onClose={closeAudioModal}
        titleName="Do You Want To Continue"
        body={<PageNextBox onYesBTN={YESBTN} onNoBTN={NOBTN} />}
      />
    </>
  );
}

export default FooterStory;
