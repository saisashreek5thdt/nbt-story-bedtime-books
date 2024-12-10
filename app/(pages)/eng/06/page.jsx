"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page6() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/05");
  };

  const nextPageHandler = () => {
    router.push("/eng/07");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"10"}
        pageNum2={"11"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page6;
