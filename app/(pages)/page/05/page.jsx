"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
function Page5() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/04");
  };

  const nextPageHandler = () => {
    router.push("/page/06");
  };

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page5/rk0f6kk64kskaptbyoyt",
  });

  const imgURL2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page5/xpjmjn2oo14z4nv0uyx1",
  });

  return (
    <>
      <section className="w-full h-screen bg-cover page5 select-none">
        <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full p-6">
          {/* Top-left (Text Section 1) */}
          <div className="flex flex-col gap-4 mt-2 ml-10 text-justify text-2xl font-medium sm:gap-1 sm:-mt-2 sm:ml-2 sm:text-sm lg:gap-4 lg:mt-2 lg:ml-10 lg:text-justify lg:text-2xl">
            <p>Saint - Tell me, little one, how big is the moon?</p>
            <p>Princess - It is as wide as my index finger.</p>
            <p>
              When I lift it towards the moon, it completely covers it, and then
              I can&apos;t see the moon at all.
            </p>
            <p>Saint - Do you know how high it is?</p>
            <p>
              Princess - It&apos;s visible just above that tree in the palace
              garden.
            </p>
          </div>

          {/* Top-right (First Image) */}
          <div className="flex justify-start  items-center ">
            <Image
              src={imgURL1}
              alt="Moon Story Image 1"
              className="ml-12 mt-16 sm:w-[600px] sm:h-[250px] sm:mt-4  lg:mt-[150px] lg:w-[1000px] lg:h-[600px] "
              width={1200}
              height={800}
              quality={100}
              objectFit="cover"
            />
          </div>

          {/* Bottom-left (Second Image) */}
          <div className="flex justify-start items-center ">
            <Image
              src={imgURL2}
              alt="Moon Story Image 2"
              className="mb-28 -ml-6 sm:w-[250px] sm:h-[150px] sm:mb-10 lg:w-[650px] lg:h-[500px] lg:mb-[140px] "
              width={500}
              height={500}
              quality={100}
              objectFit="cover"
            />
          </div>

          {/* Bottom-right (Text Section 2) */}
          <div className="flex flex-col gap-2 ml-10 -mt-20 text-justify text-2xl font-medium sm:gap-[2px] sm:-mt-16 sm:ml-10 sm:text-sm lg:gap-4  lg:ml-10 lg:text-justify lg:text-2xl">
            <p>I think it is just as high as that tree.</p>
            <p>Saint What does the moon look like?</p>
            <p>Princess - It is white and bright like silver.</p>
            <p>Saint How far away from you is it?</p>
            <p>
              Princess (softly singing) Chanda mama door ke... Oh!!! The moon is
              far, far away.
            </p>
            <p>
              The king graciously awarded the saint for cheering up his
              daughter.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"08"}
        pageNum2={"09"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page5;
