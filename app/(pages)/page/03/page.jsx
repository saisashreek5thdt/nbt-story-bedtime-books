"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page3() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/02");
  };

  const nextPageHandler = () => {
    router.push("/page/04");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page3 bg-cover select-none">
        <div className="ml-[45rem] py-[4rem] flex flex-col justify-center gap-3 text-slate-800 text-2xl text-justify font-medium">
          <p className="px-24">
            Dadaji&apos;s eyes twinkle. He had been expecting this question from
            Veer for quite sometime now. He knew about the forthcoming workshop
            in the boy&apos;s school, and had seen his excited preparations.
          </p>
          <p className="px-24">
            Dadaji - What is so special about the moon today?
          </p>
          <p className="px-24">
            Veer - Dadaji, this morning while cleaning my room,
            I saw the picture of a spacecraft on the moon on the
            front page of a newspaper. There were also pictures
            of people celebrating. I want to know why this news
            was so important that day.
          </p>
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
