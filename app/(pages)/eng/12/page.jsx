"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page12() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/11");
  };

  const nextPageHandler = () => {
    router.push("/eng/13");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"22"}
        pageNum2={"23"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
