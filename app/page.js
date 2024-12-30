"use client";
import { useState } from "react";
import Image from "next/image";
import FooterMain from "./_Components/FooterMain";
import Modal from "./_Components/Modal";
import LanguageBox from "./_Components/LanguageBox";
import { CldImage, getCldImageUrl } from "next-cloudinary";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const imgURL = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/coverImages/home/znrri581t1m0yfeg2emd",
  });

  return (
    <>
      <section className="w-[100vw] h-[100vh] bgHome overflow-hidden">
        <div className="flex items-end justify-end pr-5 py-10">
          <Image
            src="/images/icons/lang.png"
            alt="Language Icon"
            width={56}
            height={56}
            quality={100}
            priority={true}
            className="w-14 h-14 animate-pulse cursor-pointer"
            onClick={openModal}
          />
        </div>
        <div className="xl:w-[30rem] xl:max-h-80  mx-auto top-12 flex items-center justify-center">
          {/* <Image
            src="/images/home/homePageBG1.png"
            alt="Chandrayaan 3"
            width={610}
            height={610}
            quality={100}
            priority={true}
            className="mt-5 2xl:w-[38rem] 2xl:bottom-48"
            style={{ height: "auto", width: "auto" }}
          /> */}
          <CldImage
            src={imgURL}
            className="bg-cover sm:w-[320px] sm:h-[300px] sm:-mt-28 lg:w-[550px] lg:h-[550px] lg:mt-10 xl:mt-5 xl:w-[38rem] xl:bottom-48"
            width={2362}
            height={2834}
            crop={{ type: "auto", source: true }}
            alt="Chandrayaan3 Cover Page"
          />
        </div>
      </section>
      <FooterMain />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        titleName="Select Your Language"
        body={<LanguageBox />}
      />
    </>
  );
}
