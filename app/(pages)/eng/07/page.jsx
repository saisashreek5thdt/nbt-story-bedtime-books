"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page7() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/06");
  };

  const nextPageHandler = () => {
    router.push("/eng/08");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"12"}
        pageNum2={"13"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page7;
