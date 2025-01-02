"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page17() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/16");
  };

  const nextPageHandler = () => {
    router.push("/eng/18");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page17 select-none">
        <div className="content-between-center flex pl-16 pt-10 md:pt-15 xd:pt-2  sm:pr-5  md:pr-2 lg:pr-10  gap-20 text-2xl sm:text-sm md:text-base lg:text-lg xl:text-2xl pr-30 text-justify">
          <div className="content-between-center  w-[620px] flex-col gap-6 ">
            <p>
              Veer - What will this rover do on the moon? Nobody stays there.
              How will it help us?
            </p>
            <p>
              Dadaji - Ha! Ha! Ha! You are wrong, little boy. Like Chandrayaan 1
              gave valuable inputs about the possibility of water on the moon,
              this mission will explore the properties of the moon&apos;s surface,
              its soil, gases, metals and minerals.
            </p>
          </div>
          <div className="flex flex-col w-[610px] sm:gap-5  w:pl-20 gap-4">
            <p>
              Veer smiled sheepishly. He wanted to show Dadaji that he was not a
              little boy. He knew a lot!
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"32"}
        pageNum2={"33"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
