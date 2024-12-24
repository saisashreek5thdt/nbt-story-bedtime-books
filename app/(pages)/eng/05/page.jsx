"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
function Page5() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/04");
  };

  const nextPageHandler = () => {
    router.push("/eng/06");
  };

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page5/rk0f6kk64kskaptbyoyt",
  });

  const imgURL2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page5/jzrvvi6vpyad3gxef6ar",
  });

  return (
    <>
      <section className="w-[100vw] h-[100vh] page5 bg-cover select-none">
        <div className="min-h-screen ">
          <div className="grid grid-rows-2">
            <div className="flex items-center justify-between">
              <div className="flex ml-14 -mt-52 flex-col gap-4 text-justify text-2xl font-medium select-none">
                <p>Saint Tell me, little one, how big is the moon?</p>
                <p>Princess - It is as wide as my index finger.</p>
                <p>
                  When I lift it towards the moon, it completely covers it, and
                  then I can&apos;t see the moon at all.
                </p>
                <p>Saint-Do you know how high it is?</p>
                <p>
                  Princess - It&apos;s visible just above that tree in the
                  palace garden.
                </p>
              </div>
              <Image
                src={imgURL1}
                alt="image1"
                className="  bg-cover top-0 left-0 -mt-10"
                width={1000}
                height={800}
                quality={100}
                objectFit="cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <Image
                src={imgURL2}
                alt="image1"
                className="bg-cover mr-48 -mt-[800px]"
                width={500}
                height={500}
                quality={100}
                objectFit="cover"
              />
              <div className="text-justify gap-2 -mt-[850px] mr-10  flex flex-col text-2xl font-medium select-none">
                
                <p>I think it is just as high as that tree.</p>
                <p>Saint What does the moon look like?</p>
                <p>Princess - It is white and bright like silver.</p>
                <p>Saint How far away from you is it?</p>
                <p>
                  Princess (softly singing) Chanda mama door ke... Oh!!! The
                  moon is far, far away.
                </p>
                <p>
                  The king graciously awarded the saint for cheering up his
                  daughter.
                </p>
              </div>
            </div>
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
