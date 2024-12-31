"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page18() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/17");
  };

  const nextPageHandler = () => {
    router.push("/page/19");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page18 select-none">
        <div className="flex text-white text-justify text-2xl font-medium w-full px-16 pt-20 gap-12">
          <div className="flex pl-3 flex-col gap-4">
            <p className="w-[500px]">
              Dadaji understood that Veer had asked this question to impress 
              him about his knowledge. So he played along.
            </p>
            <p>
              Veer - It is known as the &apos;Tiranga Point&apos; where Chandrayaan 2 crash landed,
              and &apos;Shiv Shakthi Point&apos; where Chandrayaan 3 successfully landed.
            </p>
          </div>
          <div className="flex pl-40 flex-col gap-4">
            <p>
              Dadaji - Brilliant! Veer. Everything which our country does has a scientific and
              spiritual dimension to it. Shri Narendra Modi has named these two points himself
              after the success of Chandrayaan 3.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"34"}
        pageNum2={"35"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
