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
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"18"}
        pageNum2={"19"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
