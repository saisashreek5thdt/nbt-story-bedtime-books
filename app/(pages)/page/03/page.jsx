"use client";
import FooterStory from "@/app/_Components/FooterStory";
<<<<<<< HEAD
import React from "react";
import { useRouter } from "next/navigation";

function Page3() {
  const router = useRouter();
=======
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import { lang } from "../../../utils/lang";
function Page3() {
  const router = useRouter();
  const { state, setCurrentPath } = useGlobalState();
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2

  const prevPageHandler = () => {
    router.push("/page/02");
  };

  const nextPageHandler = () => {
    router.push("/page/04");
  };

<<<<<<< HEAD
=======
  useEffect(() => {
    if (state.currentPath) {
      setCurrentPath(router.push("/page/03")); // Update the current path when the component mounts
    }
  }, []);

  const pageData = lang?.find(
    (language) =>language[state.lang.toLowerCase()] &&language[state.lang.toLowerCase()][0]?.page3?.[0]
  );

  const para1 =pageData?.[state.lang.toLowerCase()]?.[0]?.page3?.[0]?.para1 || "Default content.";
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
  return (
    <>
      <section className="w-[100vw] h-[100vh] page3 bg-cover select-none">
        <div className="ml-[45rem] py-[4rem] flex flex-col justify-center gap-3 text-slate-800 text-2xl text-justify font-medium">
<<<<<<< HEAD
          <p className="px-24">
            Dadaji&apos;s eyes twinkle. He had been expecting this question from
            Veer for quite sometime now. He knew about the forthcoming workshop
            in the boy&apos;s school, and had seen his excited preparations.
          </p>
          <p className="px-24">
            Dadaji - What is so special about the moon today?
          </p>
          <p className="px-24">
            Veer - Dadaji, this morning while cleaning my room,
            I saw the picture of a spacecraft on the moon on the
            front page of a newspaper. There were also pictures
            of people celebrating. I want to know why this news
            was so important that day.
          </p>
=======
        {Array.isArray(para1) && para1.length > 0
                ? para1.map((text, index) => (
                    <p key={index} className="text-justify text-lg font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>}
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
        </div>
      </section>
      <FooterStory
        pageNum1={"04"}
        pageNum2={"05"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page3;
