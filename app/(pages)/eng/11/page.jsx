"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

export default function Page11() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/10");
  };

  const nextPageHandler = () => {
    router.push("/eng/12");
  };

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
  });

  return (
    <>
      <section className="w-full h-screen bg-cover page11 select-none">
        <div className="flex flex-col sm:flex-row w-full h-full">
          {/* Image Section */}
          <div className="w-full sm:w-1/2">
            <Image
              src={imgURL1}
              alt="image1"
              className="bg-cover object-cover w-full h-auto sm:h-full md:h-full"
              width={900}
              height={800}
              quality={100}
              objectFit="cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="text-black text-justify sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium pr-4 sm:pr-3 pt-10 sm:pt-10 md:pt-15 xl:pt-[5%] flex flex-col sm:flex-row-reverse gap-4 w-full sm:w-1/2 xl:w-[45%]">
            <div className="flex flex-col   gap-2">
              <p>
                Veer - I know. I saw the satellites video on youtube. It was so
                interesting. Tell me Dadaji, what is so special about
                Chandrayaan 3?
              </p>
              <p>
                Dadaji - You have asked a very good question. I will explain in
                detail. Just then, Veer&apos;s mother entered the room with a
                tray with two glasses of hot milk for both of them. Dadaji took
                a sip.
              </p>
              <p>
                Veer adjusted his pillow to be even more comfortable. The milk
                was too hot for him. He would wait a bit to drink it.
              </p>
              <p>
                Dadaji - The landing of Chandrayaan 3 is a matter of great pride
                for us because India is the first country to successfully land
                on the south pole of the moon. Our scientists have achieved it
                at a very low cost of 620 million dollars which is almost half
                the cost of a Hollywood movie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <FooterStory
        pageNum1={"20"}
        pageNum2={"21"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
