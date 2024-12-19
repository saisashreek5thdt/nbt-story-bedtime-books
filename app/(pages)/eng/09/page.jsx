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
      <section className="w-[100vw] h-[100vh] bg-cover page9 select-none"></section>
      <FooterStory
        pageNum1={"16"}
        pageNum2={"17"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
