"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page22() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/21");
  };

  const nextPageHandler = () => {
    router.push("/page/23");
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/desktop hd (3).jpg')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 w-full h-full">
        <div className="absolute top-[10%] right-[5%] lg:right-[10%] max-w-md text-right">
          <h1 className="text-sm lg:text-xl  text-black">
            Veer - Modi ji is my role model. His speech after the success of the
            Chandrayaan 3 mission was very impressive. Some day, I too want to
            become like him.
          </h1>
          <p className="mt-4 text-sm lg:text-xl text-black">
            Dadaji - Yes, Veer. Modi ji has taken India to new heights and
            become a global leader. He is the Prime Minister of 1.45 billion
            people and carries their dreams and hopes. He encourages the youth
            of today. The 'Jai Anusandhan' slogan was first raised by PM Modi in
            January 2019 while imploring scientists to encourage research among
            students.
          </p>
        </div>
      </div>

      {/* Footer */}
      <FooterStory
        pageNum1={"42"}
        pageNum2={"43"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </div>
  );
}
