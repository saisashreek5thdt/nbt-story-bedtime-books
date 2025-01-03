"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function FooterPage({ pageNum1, pageNum2, onNext }) {
  const navigate = useRouter();

  const pageHandler = (e) => {
    e.preventDefault();
    navigate.push("/");
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-16 bg-[#c4122f] text-white flex items-center justify-between">
        <div className="pl-4 flex items-center justify-between gap-4 select-none">
          <h1 className="font-medium text-lg">{pageNum1}</h1>
        </div>
        <div
          className="flex items-center justify-center gap-10 cursor-pointer"
          onClick={pageHandler}
        >
          <Image
            src="/images/icons/moon-icon.png"
            alt="moon"
            width={56}
            height={56}
            quality={100}
            className="w-14 h-14 absolute bottom-10 hover:animate-spin"
          />
          <h1 className="py-10 mt-5">Index</h1>
        </div>
        <div className="pr-4 flex items-center justify-between gap-4">
          <div className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer" onClick={onNext}>
            <ChevronRight className="text-2xl" />
          </div>
          <h1 className="font-medium text-lg select-none">{pageNum2}</h1>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
