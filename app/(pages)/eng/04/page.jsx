"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

function Page4() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/03");
  };

  const nextPageHandler = () => {
    router.push("/eng/05");
  };

  let imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page4/b838utzg4iozpiqxnk1d",
  });

  return (
    <>
      <section className="w-full h-screen bg-cover page4 select-none relative">
        {/* Image container, positioned top-right */}
        <div className="absolute top-3 w-[100%] right-4 flex justify-end">
          <CldImage
            src={imgURL1}
            alt="moon"
            className="bg-cover"
            width={200}
            height={100}
          />
        </div>

        {/* Text container moved to the right side */}
        <div className="absolute top-[14%]  font-small right-[2%] sm:right-[2%] md:right-[2%] lg:right-[2%]  w-[90%] sm:w-[56%] md:w-[58%] lg:w-[50%] xl:w-[50%] text-justify   text-white text-xs sm:text-xs md:text-base md:pt-5 sm:pt-2 lg:text-xl lg:pt-10 font-medium leading-normal sm:leading-relaxed ">
          <p className="mb-0">
            Dadaji - Veer, it was a very great day in the history of Space
            research, as well as for India. Modiji has rightly named 23 August as
            National Space Day. But first let me tell you a small story about
            the moon which I heard from my grandmother when I was young.
          </p>
          <p className="mb-0">
            Veer - Wow! Tell me quickly, Dadaji.
          </p>
          <p className="mb-0">
            Dadaji - Once upon a time, a young princess wanted to go to the moon.
            The king didn&apos;t know how to fulfil his daughter&apos;s foolish
            wish. He promised a huge reward for anyone who would please his daughter.
            Many courtiers came forward with various ideas but none could please the
            princess.
          </p>
          <p className="mb-0">
            One day, a saint came and took the challenge.
            He asked the king to bring his daughter before him.
          </p>
          <p className="mb-0">
            Saint - Tell me, little one, how big is the moon?
          </p>
        </div>
      </section>

      {/* Footer navigation */}
      <FooterStory
        pageNum1={"06"}
        pageNum2={"07"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page4;
