"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page28() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/eng/27");
  };

  const nextPageHandler = () => {
    router.push("/eng/29");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page28 select-none">
        <div className="text-black  flex pl-16 pt-10 md:pt-15 xd:pt-2 sm:pr-2 sm:pl-2 md:pr-5 md:pl-5 lg:pr-10 gap-20 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl pr-30 text-justify">
          <div className="w-[630px] flex flex-col gap-4 ml-auto ">
            <div className=" text-center font-bold text-2xl"><h1> Excerpts from Modiji's Speeches </h1></div>
            <p>
              
              1. To scientifically prove the astronomical principles in India's
              scriptures, the new generation should come forward with fresh
              perspectives for their study. This is essential for our heritage
              and also for science. 2. On 23 August when India unfurled the
              tricolour on the moon, that day will now be celebrated as National
              Space Day. 3. Today, from trade to technology, India is counted
              among the front-runners, or the 'first row', of nations. In the
              journey from the 'third row' to the 'first row', institutions like
              ISRO have played a significant role. 4. This tricolour point will
              become the inspiration for every endeavour of India. This
              tricolour point will teach us that no failure is final, success
              comes with strong determination.
            </p>
          </div>
          <div className="flex flex-col w-[610px] sm:gap-5 gap-4 ml-auto pr-14 ">
            <p>
              5. In Chandrayaan-3, our women scientists have showcased the
              significant role of the power of women in our country. The
              'Shivashakti' point on the moon will bear witness to India's
              scientific and philosophical contemplation for centuries to come.
              6. This is the India of today. Fearless and resilient. It thinks
              anew, it thinks differently. Even in the darkest corners, it
              spreads rays of light across the world. 7. India is on the moon!
              We have our national pride planted there! We reached where no one
              had reached before. We did what no one had ever done. 8. In India,
              we all refer to the Earth as 'Mother' and the Moon as 'Uncle'. It
              was once said that Uncle Moon is very door (far away). Now, there
              will come a day when children will say, 'Uncle Moon' is
              just a 'tour' away   .
            </p>
          </div>
        </div>
      </section>

      <FooterStory
        pageNum1={"54"}
        pageNum2={"55"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
