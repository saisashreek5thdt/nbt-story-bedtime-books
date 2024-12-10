"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page5() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/05");
  };

  const nextPageHandler = () => {
    router.push("/eng/06");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"08"}
        pageNum2={"09"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page5;
