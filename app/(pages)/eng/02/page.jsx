"use client";
import FooterStory from "@/app/_Components/FooterStory";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout3 from "@/app/_Layouts/TwoColumnLayout3";
import { getCldImageUrl } from 'next-cloudinary';

function Page2() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/01");
  };

  const nextPageHandler = () => {
    router.push("/eng/03");
  };

  let imgURL1 = getCldImageUrl({
    src: 'NBT-Chandrayaan3/assets/fgImages/page2/gd2m5ir1xdflrfxxfduv',
    width: 960,
    height: 600,
    fillBackground: true,
    crop: 'auto'
  });

  let imgURL2 = getCldImageUrl({
    src: 'NBT-Chandrayaan3/assets/fgImages/page2/marjuyovclvtt9mld98d',
    width: 960,
    height: 600,
    fillBackground: true,
    crop: 'auto'
  })


  return (
    <>
      <section className="w-[100vw] h-[100vh] page2 bg-cover select-none">
        {/* <div className="flex gap-5">
          <div className="w-full h-full relative">
            <Image
              src="/images/Page1/bed.png"
              alt="bed grandfather grandson moon story"
              className="bg-cover"
              width={1500}
              height={900}
              priority={true}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-5 mt-10 pr-28">
            <p className="text-justify text-xl font-medium select-none">
              Veer&apos;s school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India&apos;s Space Research
              Programme. The topic constantly played on his mind. One night,
              after completing his homework, packing his bag for school, and
              getting his uniform ready, Veer jumped into bed and snuggled
              against Dadaji.
            </p>
            <p className="text-justify text-xl font-medium select-none">
              Veer - Dadaji, tell me a story about space, the moon, and
              astronauts.
            </p>
          </div>
        </div> */}
        {/* <div className="flex">
          <Image
            src="/images/Page1/bed.png"
            alt="bed grandfather grandson moon story"
            className="bg-cover"
            width={500}
            height={900}
            priority={true}
            quality={100}
          />
          <div className="flex flex-col gap-5 my-28 right-96">
            <p className="text-justify text-lg font-medium select-none">
              Veer&apos;s school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India&apos;s Space Research
              Programme. The topic constantly played on his mind. One night,
              after completing his homework, packing his bag for school, and
              getting his uniform ready, Veer jumped into bed and snuggled
              against Dadaji.
            </p>
            <p className="text-justify text-lg font-medium select-none">
              Veer - Dadaji, tell me a story about space, the moon, and
              astronauts.
            </p>
          </div>
        </div> */}
        <TwoColumnLayout3
          className="w-full h-full bg-cover"
          imageSrc={imgURL1}
          altText="bed grandfather grandson moon story"
          width={1034}
          height={702}
          imageSrc1={imgURL2}
          altText1="Moon Earth Satelite Space"
          width1={500}
          height1={250}
          className1="w-full h-full bg-cover"
        >
          <div className="flex flex-col gap-5 mx-auto my-28 pr-28">
            <p className="text-justify text-2xl font-medium select-none">
              Veer&apos;s school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India&apos;s Space Research
              Programme.
            </p>
            <p className="text-justify text-2xl font-medium select-none">
              The topic constantly played on his mind. One night, after
              completing his homework, packing his bag for school, and getting
              his uniform ready, Veer jumped into bed and snuggled against
              Dadaji.
            </p>
            <p className="text-justify text-2xl font-medium select-none">
              Veer - Dadaji, tell me a story about space, the moon, and
              astronauts.
            </p>
          </div>
        </TwoColumnLayout3>
        {/* <TwoRowsTwoColumsLayout1
          imgSRC1="/images/Page1/moonBG.gif"
          imgSRC2="/images/Page1/bed.png"
          text1="Veer's school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India's Space Research
              Programme. The topic constantly played on his mind. One night,
              after completing his homework, packing his bag for school, and
              getting his uniform ready, Veer jumped into bed and snuggled
              against Dadaji."
          text2=" Veer - Dadaji, tell me a story about space, the moon, and
              astronauts."
        /> */}
      </section>
      <FooterStory
        pageNum1={"03"}
        pageNum2={"04"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page2;
