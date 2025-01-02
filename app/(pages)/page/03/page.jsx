"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page3() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/02");
  };

  const nextPageHandler = () => {
    router.push("/eng/04");
  };

  return (
    <>
      <section className="w-full h-screen bg-cover select-none page3">
        <div className="flex justify-end h-full">
          {/* Text container with limited width and adjusted height */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-4 flex flex-col justify-start gap-3 text-slate-800 font-medium text-justify">
            <p className="mb-3 text-base sm:text-lg md:text-lg lg:text-xl">
              Dadaji&apos;s eyes twinkle. He had been expecting this question from
              Veer for quite some time now. He knew about the forthcoming workshop
              in the boy&apos;s school, and had seen his excited preparations.
            </p>
            <p className="mb-3 text-base sm:text-lg md:text-lg lg:text-xl">
              Dadaji - What is so special about the moon today?
            </p>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl">
              Veer - Dadaji, this morning while cleaning my room,
              I saw the picture of a spacecraft on the moon on the
              front page of a newspaper. There were also pictures
              of people celebrating. I want to know why this news
              was so important that day.
            </p>
          </div>
        </div>
      </section>

      <FooterStory
        pageNum1={"04"}
        pageNum2={"05"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page3;