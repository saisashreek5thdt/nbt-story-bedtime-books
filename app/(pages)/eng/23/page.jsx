"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page23() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/22");
  };

  const nextPageHandler = () => {
    router.push("/eng/24");
  };

  return (
    <>
      <section
        className="w-[100vw] h-[120vh] bg-cover page23 select-none relative"
        style={{
          backgroundImage: "url('/images/page23/desktop hd.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-[2%] p-7 text-justify text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl  lg:pt-10 font-medium flex justify-end">
          <div className="w-[90%] xs:w-[85%] sm:w-[42%] md:w-[40%] lg:w-[42%] xl:w-[50%] 2xl:w-[45%] flex flex-col gap-4">
            <p>
              Dadaji, I also loved his speech when he said - "Chandrayaan Maha
              Abhiyan is a success not only for India but for the entire
              humanity." It shows the world that India truly believes in
              Vasudhaiva Kutumbakam — meaning One Earth, One Family, One Future.
              That was the theme of India's G20 Presidency held in New Delhi in
              September 2023.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"44"}
        pageNum2={"45"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
          
    </>
  );
}
