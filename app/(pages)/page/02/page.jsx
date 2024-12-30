<<<<<<< HEAD
<<<<<<<< HEAD:app/(pages)/page/02/page.jsx
"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout4 from "@/app/_Layouts/TwoColumnLayout4";
import { getCldImageUrl } from "next-cloudinary";
import { lang } from "../../../utils/lang";
========
{/* <div className="grid grid-cols-4 gap-4">
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "English" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("English", "/page/01")}
        >
          English
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "हिंदी" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("हिंदी", "/page/01")}
        >
          हिंदी
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "తెలుగు" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("తెలుగు", "/page/01")}
        >
          తెలుగు
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "தமிழ்" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("தமிழ்", "/page/01")}
        >
          தமிழ்
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "অসমীয়" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("অসমীয়", "/page/01")}
        >
          অসমীয়
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "ગુજરાત" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("ગુજરાત", "/page/01")}
        >
          ગુજરાત
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "ಕನ್ನಡ" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("ಕನ್ನಡ", "/page/01")}
        >
          ಕನ್ನಡ
        </button>
        <button
          className={`bg-[#e25a71] text-white text-center py-2 px-2 pr-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "മലയാളം" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("മലയാളം", "/page/01")}
        >
          മലയാളം
        </button>
      </div> */}
>>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2:app/(pages)/page/01/dump.groovy


<<<<<<<< HEAD:app/(pages)/page/02/page.jsx
=======
"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout4 from "@/app/_Layouts/TwoColumnLayout4";
import { getCldImageUrl } from "next-cloudinary";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import { lang } from "../../../utils/lang";

function Page2() {
  const router = useRouter();
  const { state, setCurrentPath } = useGlobalState();

>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
  const prevPageHandler = () => {
    router.push("/page/01");
  };

  const nextPageHandler = () => {
    router.push("/page/03");
  };

<<<<<<< HEAD
=======
  useEffect(() => {
      if (state.currentPath) {
        setCurrentPath(router.push("/page/02")); // Update the current path when the component mounts
      }
    }, []);

>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
  let imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page2/gd2m5ir1xdflrfxxfduv",
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });

  let imgURL2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page2/marjuyovclvtt9mld98d",
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });

  // let imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/fgImages/page2/gd2m5ir1xdflrfxxfduv",
  // });

  // let imgURL2 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/fgImages/page2/marjuyovclvtt9mld98d",
  // });

<<<<<<< HEAD
  const pageData = lang?.[0]?.english?.[0]?.page2?.[0]; // Access page1 using optional chaining
  console.log("Page Data:", pageData); // Log the fetched page data
  
    // If pageData exists, fetch para1, otherwise use fallback text
    //const para1 = pageData?.para1?.[0] || "Default content.";
    
    //const para2 = pageData?.para2?.[0];
    

    const para1 = Array.isArray(pageData?.para1) ? pageData.para1 : [];
    console.log(para1);
    const para2 = Array.isArray(pageData?.para2) ? pageData.para2 : [];
    console.log(para2);
=======
  

  // const pageData = lang?.[0]?.english?.[0]?.page2?.[0]; // Access page1 using optional chaining
  // console.log("Page Data:", pageData); // Log the fetched page data
  
  //   // If pageData exists, fetch para1, otherwise use fallback text
  //   //const para1 = pageData?.para1?.[0] || "Default content.";
    
  //   //const para2 = pageData?.para2?.[0];
    

  //   const para1 = Array.isArray(pageData?.para1) ? pageData.para1 : [];
  //   console.log(para1);
  //   const para2 = Array.isArray(pageData?.para2) ? pageData.para2 : [];
  //   console.log(para2);

  const pageData = lang?.find(
    (language) => language[state.lang.toLowerCase()] && language[state.lang.toLowerCase()][0]?.page2?.[0]
  );

  // Extract para1 and para2 dynamically from pageData
  const para1 = pageData?.[state.lang.toLowerCase()]?.[0]?.page2?.[0]?.para1 || ["Default content for para1"];
  const para2 = pageData?.[state.lang.toLowerCase()]?.[0]?.page2?.[0]?.para2 || ["Default content for para2"];
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2


  return (
    <>
      <section className="w-[100vw] h-[100vh] page2 bg-cover select-none">
<<<<<<< HEAD
        {/* <div className="flex gap-5">
========
      1page: {/* <div className="flex gap-5">
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


        page 2:{/* <div className="flex gap-5">
>>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2:app/(pages)/page/01/dump.groovy
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
        {/* <TwoColumnLayout3
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
        </TwoColumnLayout3> */}
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
        {/* <div className="grid grid-rows-2 grid-cols-2 grid-flow-col h-1/2 ">
          <div className=" h-48 ml-40 mt-8 w-3/4 flex gap-4 flex-col">
            <p className="text-justify text-lg font-medium select-none">
              Veer&apos;s school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India&apos;s Space Research
              Programme.
            </p>
            <p className="text-justify text-lg font-medium select-none">
              The topic constantly played on his mind. One night, after
              completing his homework, packing his bag for school, and getting
              his uniform ready, Veer jumped into bed and snuggled against
              Dadaji.
            </p>
            <p className="text-justify text-lg font-medium select-none">
              Veer - Dadaji, tell me a story about space, the moon, and
              astronauts.
            </p>
          </div>
          <div className="">
            <Image
              src={imgURL1}
              alt="bed grandfather grandson moon story"
              className="bg-cover "
              width={700}
              height={200}
              priority={true}
              quality={100}
            />
          </div>
          <div className=" ml-52">
            <Image
              src={imgURL2}
              alt="bed grandfather grandson moon story"
              className="bg-cover"
              width={1000}
              height={350}
              priority={true}
              quality={100}
            />
          </div>
          <div className="w-4/5 mt-52 flex gap-4 flex-col">
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
<<<<<<<< HEAD:app/(pages)/page/02/page.jsx
        <TwoColumnLayout4
          // textContent1={
          //   <>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer&apos;s school was soon to hold a workshop on Space. Veer
          //       wanted to actively participate in this workshop. He was very
          //       interested in learning about India&apos;s Space Research
          //       Programme.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       The topic constantly played on his mind. One night, after
          //       completing his homework, packing his bag for school, and getting
          //       his uniform ready, Veer jumped into bed and snuggled against
          //       Dadaji.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer - Dadaji, tell me a story about space, the moon, and
          //       astronauts.
          //     </p>
          //   </>
          // }
          // textContent2={
          //   <>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer&apos;s school was soon to hold a workshop on Space. Veer
          //       wanted to actively participate in this workshop. He was very
          //       interested in learning about India&apos;s Space Research
          //       Programme. The topic constantly played on his mind. One night,
          //       after completing his homework, packing his bag for school, and
          //       getting his uniform ready, Veer jumped into bed and snuggled
          //       against Dadaji.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer - Dadaji, tell me a story about space, the moon, and
          //       astronauts.
          //     </p>
          //   </>
          // }
=======
        
        <TwoColumnLayout4
          
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
          textContent1={
            <>
              {Array.isArray(para1) && para1.length > 0
                ? para1.map((text, index) => (
<<<<<<< HEAD
                    <p key={index} className="text-justify text-2xl font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-2xl font-medium select-none">No content available.</p>}
=======
                    <p key={index} className="text-justify text-lg font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>}
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
            </>
          }
          textContent2={
            <>
              {Array.isArray(para2) && para2.length > 0
                ? para2.map((text, index) => (
<<<<<<< HEAD
                    <p key={index} className="text-justify text-2xl font-medium select-none">
=======
                    <p key={index} className="text-justify text-lg font-medium select-none">
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>}
            </>
          }
          
          imageSrc1={imgURL1}
          altText1="bed grandfather grandson moon story"
          width1={700}
          height1={200}
          imageSrc2={imgURL2}
          altText2="bed grandfather grandson moon story"
          width2={1000}
          height2={350}
          className="mt-8"
        ></TwoColumnLayout4>
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
<<<<<<< HEAD
========
>>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2:app/(pages)/page/01/dump.groovy

        // textContent1={
          //   <>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer&apos;s school was soon to hold a workshop on Space. Veer
          //       wanted to actively participate in this workshop. He was very
          //       interested in learning about India&apos;s Space Research
          //       Programme.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       The topic constantly played on his mind. One night, after
          //       completing his homework, packing his bag for school, and getting
          //       his uniform ready, Veer jumped into bed and snuggled against
          //       Dadaji.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer - Dadaji, tell me a story about space, the moon, and
          //       astronauts.
          //     </p>
          //   </>
          // }
          // textContent2={
          //   <>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer&apos;s school was soon to hold a workshop on Space. Veer
          //       wanted to actively participate in this workshop. He was very
          //       interested in learning about India&apos;s Space Research
          //       Programme. The topic constantly played on his mind. One night,
          //       after completing his homework, packing his bag for school, and
          //       getting his uniform ready, Veer jumped into bed and snuggled
          //       against Dadaji.
          //     </p>
          //     <p className="text-justify text-lg font-medium select-none">
          //       Veer - Dadaji, tell me a story about space, the moon, and
          //       astronauts.
          //     </p>
          //   </>
          // }
=======

export default Page2;
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
