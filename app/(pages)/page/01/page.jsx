/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout1 from "@/app/_Layouts/TwoColumnLayout1";
import { getCldImageUrl } from "next-cloudinary";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import { lang } from "../../../utils/lang.json";
import MovingSubtitle from "@/app/_Components/MovingSubtitle";
import Image from "next/image";

export default function Page1() {
  const router = useRouter();
  const { state, setCurrentPath } = useGlobalState();

  const prevPageHandler = () => {
    router.push("/author");
  };

  const nextPageHandler = () => {
    router.push("/page/02");
  };

  useEffect(() => {
    if (state.currentPath) {
      setCurrentPath(router.push("/page/01")); // Update the current path when the component mounts
    }
  }, []);

  let imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page1/sn5v7djagnh4wqetd8nf",
    fillBackground: true,
    crop: "auto",
  });

  const pageData = lang?.find(
    (language) =>
      language[state.lang.toLowerCase()] &&
      language[state.lang.toLowerCase()][0]?.page1?.[0]
  );

  const para1 =
    pageData?.[state.lang.toLowerCase()]?.[0]?.page1?.[0]?.para1?.[0] ||
    "Default content.";

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 min-h-screen bg-cover select-none">
        <div className="container mx-auto px-4 py-8">
          <TwoColumnLayout1
          // imageSrc={imgURL1}
          // altText="Grand Father Grand Son Table"
          // width="139"
          // height="92"
          // className="bg-cover block ml-[30rem]"
          >
            <p className="text-justify sm:text-lg sm:-ml-4 sm:-mt-8 sm:w-4/5 md:text-xl md:max-w-full lg:text-2xl lg:ml-28 lg:mt-8 text-3xl font-medium select-none">
              {/* {para1} */}
            </p>
          </TwoColumnLayout1>
        </div>
      </section>
      <MovingSubtitle 
      text={para1} 
      speed={67}
      audioSrc={`https://res.cloudinary.com/dydh2rfnk/video/upload/v1735797748/NBT-Chandrayaan3/audios/obaczxdevotey9zxrrxt.mp3`}
      nextPage={nextPageHandler}
      YESBTN={nextPageHandler}
       />

      {/* <div className="flex justify-center mt-5 items-center ">
        <Image
          src={`/Menu_Footer.png`}
          alt="Moon Story Image 1"
          className=" "
          width={200}
          height={50}
          quality={100}
          objectFit="cover"
        />
      </div> */}
      
      <FooterStory
        pageNum1={"01"}
        pageNum2={"02"}
        audioSRC={`/audio/EnglishAudioPage01.mp3`}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
