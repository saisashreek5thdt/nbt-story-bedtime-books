"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

export default function Page15() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/14");
  };

  const nextPageHandler = () => {
    router.push("/page/16");
  };

  const imgURL = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page15/p5yzrsqdkrmcqsu780dz",
  });

  return (
    <>
      <section className="landscape:flex hidden w-[100vw] h-[100vh] bg-cover bg-center page15 select-none flex">
        {/* Left Section - Image */}
        <div className="w-[52%] h-full flex items-end justify-start px-0 md:px-0 lg:px-0 ">
          <Image
            src={imgURL}
            alt="image1"
            className="object-contain h-full"
            width={800}
            height={600}
            quality={100}
            priority
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-[50%] h-full flex items-center justify-center px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 text-black text-left text-xs md:text-m lg:text-lg font-medium leading-relaxed max-h-full overflow-y-auto">
            <p>Veer nodded as he gulped down the now cold milk.</p>
            <p>He faintly remembered watching this news five years ago.</p>
            <p>
              Dadaji was surprised. How could Veer remember the event? He was
              just five back then.
            </p>
            <p>
              <b>Dadaji</b> - Do you remember watching that landing of
              Chandrayaan 2? Our Prime Minister Shri Narendra Modi was also
              present in the operation control room to witness that historic
              moment. We were all so touched when Modi ji hugged and consoled
              the ISRO Chairman K Sivan and encouraged him to try again.
            </p>
            <p>
              <b>Veer</b> - I can imagine how disappointing it must have been
              for the whole team.
            </p>
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
        pageNum1={"28"}
        pageNum2={"29"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
