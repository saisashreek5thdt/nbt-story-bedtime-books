"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page18() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/17");
  };

  const nextPageHandler = () => {
    router.push("/eng/19");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page18 select-none">
  <div className="text-white  flex pl-16 pt-10 md:pt-15 xd:pt-2 sm:pr-2 sm:pl-2 md:pr-5 md:pl-5 lg:pr-10 gap-20 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl pr-30 text-justify">
    <div className="w-[630px] flex flex-col gap-4 ml-auto ">
      <p>
        Dadaji understood that Veer had asked this question to impress him
        about his knowledge. So he played along. Dadaji - You tell me. I
        don't remember exactly. Veer - It is known as the 'Tiranga Point'
        where Chandrayaan 2 crash landed, and 'Shiv Shakti Point' where
        Chandrayaan 3 successfully landed.
      </p>
    </div>
    <div className="flex flex-col w-[610px] sm:gap-5 gap-4 ml-auto pr-14 ">
      <p>
        Dadaji - Brilliant! Veer. Everything which our country does has a
        scientific and spiritual dimension to it. Shri Modi has named
        these two points himself after the success of Chandrayaan 3.
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
