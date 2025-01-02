"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page21() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/20");
  };

  const nextPageHandler = () => {
    router.push("/page/22");
  };

  return (
    <>
      <section
        className="w-[100vw] h-[100vh] bg-center bg-cover bg-no-repeat relative select-none landscape:block portrait:hidden"
        style={{
          backgroundImage: "url('/assets/desktop hd (2).jpg')", // Update with the correct path
        }}
      >
        {/* Positioned Text */}
        <div className="absolute top-[25%] left-[50%] transform -translate-x-[25%] w-[45%] bg-transparent">
          <p className="text-black font-medium text-sm md:text-m lg:text-xl leading-relaxed">
            Veer: Last Diwali, I saw him on TV standing and talking with
            our soldiers at some snowy place.
          </p>
          <p className="text-black font-medium text-sm md:text-m lg:text-xl leading-relaxed mt-4">
            Dadaji: Yes. That is his greatness. He never misses a chance
            to be with the Armed Forces and celebrate Diwali with them. He
            always shows utmost faith in their capabilities and boosts their
            morale with his presence.
          </p>
        </div>
      </section>
      <FooterStory
        pageNum1={"40"}
        pageNum2={"41"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
