"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

export default function Page8() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/07");
  };

  const nextPageHandler = () => {
    router.push("/eng/09");
  };

  const imgURL = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page8/qjoegabipmnwt6qzbkiz",
  });

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page8 select-none">
        <div className="flex items-start">
          <Image
            src={imgURL}
            alt="image1"
            className="bg-cover h-full"
            width={740}
            height={500}
            quality={100}
            objectFit="cover"
          />
          <div className="text-black text-justify text-2xl font-medium pr-10 py-20 flex flex-row-reverse">
            <div className="flex pr-8 flex-col gap-4">
              <p>
                Dadaji - Thousands of years before people could not even dream
                of space and aircrafts, ancient Indian wise men had compiled the
                Vimaanshastra, or the science of flying. Gods and kings often
                covered long distances on their flying chariots.
              </p>
              <p>
                Veer - Yes, Dadaji, I remember! In the Ramayana too, Ravana
                kidnapped Sita and flew in his Pushpak Vimaan. But then, why did
                it take us so long to explore space?
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"14"}
        pageNum2={"15"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
