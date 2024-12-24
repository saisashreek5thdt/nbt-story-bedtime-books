"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page9() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/08");
  };

  const nextPageHandler = () => {
    router.push("/eng/10");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page9 select-none">
        <div className="flex p-16 gap-10 text-2xl pr-80 text-justify">
          <div className="flex flex-col gap-4">
            <p className="">Dadaji was expecting this question. He knew that Veer wanted to get into the root of the matter. He was prepared to answer. </p>
            <p className="">Dadaji - For over fourteen hundred years, Cruel invaders attacked out land, ruled it, and caused great harm. They destroyed the famous universities of Nalanda, Takshashilla, and Vikramshilla, where many of our precious texts were kept. That is how we lost our ancient knowledge.</p>
          </div>
          <div className="pl-32">
            <p className="">Just imagine! Veer, the great mathematician Aryabhatt who discovered 'Zero' was an esteemed teacher at Nalanda University. The Chinese scholar Hiuen Tsang studied at Nalanda University and even because a teacher there, so great was its name and fame.</p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"16"}
        pageNum2={"17"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
