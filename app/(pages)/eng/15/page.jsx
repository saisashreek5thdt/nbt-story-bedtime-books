"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page15() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/14");
  };

  const nextPageHandler = () => {
    router.push("/eng/16");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"28"}
        pageNum2={"29"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
