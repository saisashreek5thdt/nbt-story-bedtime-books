"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page4() {

  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/03");
  };

  const nextPageHandler = () => {
    router.push("/eng/05");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page4 bg-cover select-none"></section>
      <FooterStory
        pageNum1={"06"}
        pageNum2={"07"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page4;
