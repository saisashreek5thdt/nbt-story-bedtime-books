"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page11() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/10");
  };

  const nextPageHandler = () => {
    router.push("/eng/12");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"20"}
        pageNum2={"21"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
