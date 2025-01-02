"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page3() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/02");
  };

  const nextPageHandler = () => {
    router.push("/eng/04");
  };

  return (
    <>
      <section className="w-full h-screen bg-cover select-none page3 flex">
        {/* Left section for image or illustration */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="relative">
            {/* Placeholder for image */}
            {/* <img
              src="/path-to-your-image.jpg"
              alt="Illustration"
              className="w-full h-auto"
            /> */}
          </div>
        </div>

        {/* Right section for text */}
        <div className="w-[80%] h-full flex items-start justify-start">
          <div className="p-7 text-justify text-black text-sm font-small   xs:text-xs sm:text-sm md:text-base lg:text-lg    xs:pl-60 sm:pl-40   md:pl-60md:w-[100%] md:pl-40 lg:w-3/2 lg:ml-40  xl:text-xl 2xl:text-2xl xl:w-[100%] xl:pl-20  xl:pt-20">
            <p className="mb-4">
              Dadaji&apos;s eyes twinkle. He had been expecting this question from
              Veer for quite some time now. He knew about the forthcoming workshop
              in the boy&apos;s school, and had seen his excited preparations.
            </p>
            <p className="mb-4">
              Dadaji - What is so special about the moon today?
            </p>
            <p>
              Veer - Dadaji, this morning while cleaning my room, I saw the picture
              of a spacecraft on the moon on the front page of a newspaper. There
              were also pictures of people celebrating. I want to know why this news
              was so important that day.
            </p>
          </div>
        </div>
      </section>

      <FooterStory
        pageNum1={"04"}
        pageNum2={"05"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page3;
