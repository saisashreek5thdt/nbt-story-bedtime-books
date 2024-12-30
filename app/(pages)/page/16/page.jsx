"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

export default function Page16() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/15");
  };

  const nextPageHandler = () => {
    router.push("/page/17");
  };

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
  });

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page16 select-none">
        <div className="flex">
          <Image
            src={imgURL1}
            alt="image1"
            className="  bg-cover top-0 left-0 -mt-24"
            width={900}
            height={800}
            quality={100}
            objectFit="cover"
          />
          <div className="text-black text-justify text-xl font-medium pr-9 pt-24 flex flex-row-reverse">
            <div className=" flex pr-8 flex-col gap-4">
              <p>
                Dadaji - No Veer. Our scientists did not sit and sulk at the setback. That same day they decided to correct the
                errors and planned Chandrayaan3.
              </p>
              <p>
                They learnt from their mistakes and made a failure-proof model for the next mission and within four years
                succeeded in their mission.
              </p>
              <p>
                We are proud of our scientists and of our leadership in showing faith in the scientific community.
                Over 100 women scientists were also involved in the mission and were in the control room at the time
                of the launch and during the landing on August 23.
              </p>
              <p>
                Prime Minister Narendra Modi met and congratulated each one of them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"30"}
        pageNum2={"31"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
