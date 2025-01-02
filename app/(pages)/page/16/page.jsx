"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

export default function Page16() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/15");
  };

  const nextPageHandler = () => {
    router.push("/page/17");
  };

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
  });

  return (
    <>
      {/* Landscape Mode Content */}
      <section className="landscape:flex hidden w-[100vw] h-[100vh] bg-cover bg-center page16 select-none">
        {/* Flexbox Container */}
        <div className="flex w-full h-full">
          {/* Left Section - Image */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={imgURL1}
              alt="image1"
              className="object-contain"
              width={900}
              height={800}
              quality={100}
              priority
            />
          </div>

          {/* Right Section - Text */}
          <div className="w-1/2 h-full flex items-center justify-center px-0 md:px-10 ">
            <div className="flex flex-col gap-2 text-black text-left text-xs md:text-l lg:text-lg font-medium leading-relaxed max-h-full overflow-y-auto">
              <p>
                <b>Dadaji</b> - No Veer. Our scientists did not sit and sulk at the setback. That same day they decided to
                correct the errors and planned Chandrayaan-3.
              </p>
              <p>
                They learnt from their mistakes and made a failure-proof model for the next mission and within four years
                succeeded in their mission.
              </p>
              <p>
                We are proud of our scientists and of our leadership in showing faith in the scientific community.
                Over 100 women scientists were also involved in the mission and were in the control room at the time
                of the launch and during the landing on August 23.
              </p>
              <p>
                Prime Minister Narendra Modi met and congratulated each one of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait Mode Prompt */}
      <section className="landscape:hidden block w-full h-screen flex items-center justify-center bg-gray-100 text-center">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Please rotate your device to landscape mode.
          </h1>
          <p className="text-red-600">
            This content is optimized for landscape view only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <FooterStory
        pageNum1={"30"}
        pageNum2={"31"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
