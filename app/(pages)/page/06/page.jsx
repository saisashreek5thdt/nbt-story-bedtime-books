"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page6() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/05");
  };

  const nextPageHandler = () => {
    router.push("/page/07");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page6 bg-cover select-none">
        <div className="flex text-justify text-white text-xl font-medium px-16 pt-20 gap-12">
          <div className="flex pl-3 flex-col gap-4">
            <p>
              Veer was getting impatient. This was not the story he wanted to
              listen tonight.
            </p>
            <p>Veer - What a silly princess. Who would believe this story?</p>
            <p>
              Dadaji - {"(Laughing)"} Veer, this is a story from the times when
              most folks knew nothing about the moon. You laughed at the
              princess because you know that many silly myths about the moon
              have been cleared. Now I will tell you all that you want to know
              about that heading.
            </p>
          </div>
          <div>
            <p>
              Veer - Wow! I can&apos; wait to know more. Tell me all, Dadaji.
              All the news channels too were very proudly broadcasting
              India&apos;s moonlanding, and everyone was so happy. Why was it
              such a big news? After all, hasn&apos;t India learnt about space
              from other countries who have already been to space?
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"10"}
        pageNum2={"11"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page6;
