"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page13() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/12");
  };

  const nextPageHandler = () => {
    router.push("/eng/14");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page13 select-none">
        <div className="text-black pl-28  pt-14 text-justify text-lg flex flex-row-reverse">
        <div className="w-1/2 flex flex-col pr-10 gap-4">
          <p className="">
          Dadaji - Ok, tell me the name of the engine of the launch vehicle that made this mission successful.
          </p>
          <p className="">Veer knew the answer. He had read it somewhere just recently. He answered promptly.</p>
          <p className="">Veer - VIKAS!!!</p>
          <p className="">Dadaji - Shabash! It is a short form of Vikram Sarabhai, who played an important role in shaping India's space research and exploration endeavours. His significant contributions have left a profound mark on India's scientific programmes.</p>
          <p className="">Veer - I am so proud of our scientists. What a great achievement!</p>
        </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"24"}
        pageNum2={"25"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
