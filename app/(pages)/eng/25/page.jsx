"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page25() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/24");
  };

  const nextPageHandler = () => {
    router.push("/eng/26");
  };

  return (
    <>
      <section
        className="w-[100vw] h-[100vh] bg-cover page25 select-none relative"
        style={{
          backgroundImage: "url('/images/page25/desktop hd.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-[2%] p-7 text-justify text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl  lg:pt-10 font-medium flex justify-end">
          <div className="w-[90%] xs:w-[85%] sm:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[45%] flex flex-col gap-4">
            <p>
              Veer - Dadaji, I also want to go to a space centre to see the
              spacecraft and learn about India's space programme. Dadaji - Good
              idea. In your next holidays, we will go to the space centre at
              Sriharikota and the ISRO Headquarters at Bengaluru. We can also go
              to Hyderabad to see the Space Science Museum. Veer Dadaji, what is
              the full form of ISRO? Dadaji ISRO stands for Indian Space
              Research Organistion. It works to reap the benefits of outer space
              for India and mankind.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"48"}
        pageNum2={"49"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
          
    </>
  );
}
