"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout1 from "@/app/_Layouts/TwoColumnLayout1";

function Page1() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/author");
  };

  const nextPageHandler = () => {
    router.push("/eng/02");
  };

  return (
    <>
      {/* <div className="flex gap-5">
          <p className="p-16 text-justify text-xl font-medium select-none">
            Ten year old Veer is a very intelligent and curious boy. He and his
            Dadaji are great friends. They sleep in the same room. At bedtime
            before falling asleep, Dadaji makes up interesting stories on any
            topic that he feels little Veer should be aware of.
          </p>
          <div className="h-full w-full relative">
            <Image
              src="/images/Page1/moonBG.gif"
              alt="moon bg"
              className="w-full bg-cover"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </div> */}
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="container mx-auto px-4 py-8">
          <TwoColumnLayout1
            imageSrc="/images/Page1/page1CG.png"
            altText="Grand Father Grand Son Table"
          >
            <p className="text-justify text-3xl font-medium select-none">
              Ten year old Veer is a very intelligent and curious boy. He and
              his Dadaji are great friends. They sleep in the same room. At
              bedtime before falling asleep, Dadaji makes up interesting stories
              on any topic that he feels little Veer should be aware of.
            </p>
          </TwoColumnLayout1>
        </div>
      </section>
      <FooterStory
        pageNum1={"01"}
        pageNum2={"02"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page1;
