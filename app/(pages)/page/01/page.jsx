"use client";
import FooterStory from "@/app/_Components/FooterStory";
<<<<<<< HEAD
import React from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout1 from "@/app/_Layouts/TwoColumnLayout1";
import { getCldImageUrl } from "next-cloudinary";
=======
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout1 from "@/app/_Layouts/TwoColumnLayout1";
import { getCldImageUrl } from 'next-cloudinary';
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
import { useGlobalState } from "@/app/context/GlobalStateContext";
import { lang } from "../../../utils/lang";

function Page1() {
  const router = useRouter();
<<<<<<< HEAD
  const { state } = useGlobalState();
=======
  const { state, setCurrentPath } = useGlobalState();
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2

  const prevPageHandler = () => {
    router.push("/author");
  };

  const nextPageHandler = () => {
    router.push("/page/02");
  };

<<<<<<< HEAD
  let imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page1/sn5v7djagnh4wqetd8nf",
    width: 139,
    height: 92,
    fillBackground: true,
    crop: "auto",
  });

  // Safely access the page1 data from lang object using optional chaining
  // const pageData = lang?.[2]?.telugu?.[0]?.page1?.[0]; // Access page1 using optional chaining
  // //console.log("Page Data:", pageData); // Log the fetched page data

  // // If pageData exists, fetch para1, otherwise use fallback text
  // const para1 = pageData?.para1?.[0] || "Default content.";

  const pageData = lang?.find(
    (language) =>
      language[state.lang.toLowerCase()] &&
      language[state.lang.toLowerCase()][0]?.page1?.[0]
  );

  const para1 =
    pageData?.[state.lang.toLowerCase()]?.[0]?.page1?.[0]?.para1?.[0] ||
    "Default content.";
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
=======
  useEffect(() => {
    if (state.currentPath) {
      setCurrentPath(router.push("/page/01")); // Update the current path when the component mounts
    }
  }, []);

  let imgURL1 = getCldImageUrl({
    src: 'NBT-Chandrayaan3/assets/fgImages/page1/sn5v7djagnh4wqetd8nf',
    width: 139,
    height: 92,
    fillBackground: true,
    crop: 'auto'
  });

  const pageData = lang?.find(language => language[state.lang.toLowerCase()] && language[state.lang.toLowerCase()][0]?.page1?.[0]);

  const para1 = pageData?.[state.lang.toLowerCase()]?.[0]?.page1?.[0]?.para1?.[0] || "Default content.";

  return (
    <>
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="container mx-auto px-4 py-8">
          <TwoColumnLayout1
            imageSrc={imgURL1}
            altText="Grand Father Grand Son Table"
            width="139"
            height="92"
            className="bg-cover block ml-[30rem]"
          >
            <p className="text-justify text-3xl font-medium select-none">
              {para1}
            </p>
          </TwoColumnLayout1>
        </div>
      </section>
      <FooterStory
        pageNum1={"01"}
        pageNum2={"02"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
<<<<<<< HEAD
        YESBTN={nextPageHandler}
        NOBTN={() => {
          router.push("/page/01");
        }}
=======
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
      />
    </>
  );
}

export default Page1;
