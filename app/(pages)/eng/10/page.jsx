"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page10() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/09");
  };

  const nextPageHandler = () => {
    router.push("/eng/11");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page10 select-none">
  <div className="absolute top-[5%] p-7 text-justify text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex justify-end">
    <div className="w-[40%] xs:w-35% sm:w-[40%] md:w-[43%] lg:w-[40%] xl:w-[42%] flex flex-col gap-2">
      <p>
        Veer was amazed. But he felt that Dadaji had started talking about
        something else now. Getting impatient, he gently returned to the
        topic he wanted to discuss.
      </p>
      <p>
        Veer - OK. But now we have been a free nation for more than 75
        years. What are we doing now?
      </p>
      <p>
        Dadaji- Yes. You are right. In the last ten years, India has made
        great progress in space exploration. We have become
        atmanirbhar(self-reliant) in all fields from sea to space and
        talent to technology. India now holds the world record for sending
        104 satellites in just one day!
      </p>
    </div>
  </div>
</section>





      <FooterStory
        pageNum1={"18"}
        pageNum2={"19"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}