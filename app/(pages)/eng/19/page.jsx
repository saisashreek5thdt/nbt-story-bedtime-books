"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page19() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/18");
  };

  const nextPageHandler = () => {
    router.push("/eng/20");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page19 flex select-none">
        <div className=" text-white flex pl-16 pt-10  sm:pr-2  text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl  text-justify">
          <div className="  sm:w-[400px] lg:w-[550px] xl:w-[600px] flex-col gap-4 ">
            <p>
              Dadaji - Veer, Shri Modi said, "The spot on the lunar surface
              where the Chandrayaan-2 left its footprints in 2019 will be known
              as 'Tiranga Point'. This will be an inspiration for every effort
              made by India. It will remind us that any failure is not final."  <br />
              
            </p>
            <p>
            Veer - He is great. Dadaji, I remember Modi ji proudly holding the
              Indian flag and waving it on TV when Chandrayaan 3
              landed successfully.
            </p>
          </div>
        </div>
      </section>

      <FooterStory
        pageNum1={"36"}
        pageNum2={"37"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
