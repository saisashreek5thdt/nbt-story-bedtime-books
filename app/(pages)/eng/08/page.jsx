"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page8() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/07");
  };

  const nextPageHandler = () => {
    router.push("/eng/09");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page8 select-none"></section>
      <FooterStory
        pageNum1={"14"}
        pageNum2={"15"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
