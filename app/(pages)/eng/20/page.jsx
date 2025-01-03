"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page20() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/19");
  };

  const nextPageHandler = () => {
    router.push("/eng/21");
  };

  return (
    <>
      <section
        className="w-[100vw] h-[100vh] bg-cover page20 select-none"
        style={{
          backgroundImage: "url('/images/page 20/desktop hd.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-black flex pl-16 pt-10 md:pt-15  sm:pr-2 sm:pl-2 md:pr-5 md:pl-5 lg:pr-10 gap-20 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl pr-10 text-justify">
          <div className="w-[580px] sm:w-[450px] lg:w-[500px]  xl:w-[610px] flex flex-col gap-4 ml-auto">
            <p>
              Dadaji - Yes, at that time Modi ji was in South Africa to attend
              the 15th BRICS summit but was keeping a close watch on the
              progress of the Chandrayaan 3. He is always there to support our
              space team. Veer listened in wonder as Dadaji continued.
            </p>
          </div>
          <div className="flex flex-col w-[500px]  sm:w-[450px] lg:w-[500px] xl:w-[610px] sm:gap-0 gap-2 ml-auto ">
            <p>
              Dadaji - After his return, he himself went to the space centre in
              Bangalore and congratulated all the scientists personally. This
              kind of motivation boosts the morale of our young scientists and
              inspires them to achieve new heights.
            </p>
          </div>
        </div>
      </section>

      <FooterStory
        pageNum1={"38"}
        pageNum2={"39"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
