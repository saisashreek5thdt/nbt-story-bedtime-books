"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

function Page7() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/06");
  };

  const nextPageHandler = () => {
    router.push("/eng/08");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page7 bg-cover select-none">
        <div className="flex text-black px-16 pt-20 gap-12 text-xl ">
          <p>
            Dadaji - Veer, this is what everyone has been made to believe. The
            fact is, that other nations have explored space just a few decades
            back. But many of our ancient Indian texts, like the Vedas,
            discussed about space and astronomy thousands of years ago. Do you
            know that India was once the vishvaguru, or the teacher of the
            world?
          </p>
          <p>
            Veer&apos; eyes widened. He had not known this about his country. He
            became even more alert and intrested in what Dadaji was saying. Ths
            clever grandpa knew that Veer was keen to learn of the glory of
            India&apos;s past. He continued on the same lines.
          </p>
        </div>
      </section>
      <FooterStory
        pageNum1={"12"}
        pageNum2={"13"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page7;
