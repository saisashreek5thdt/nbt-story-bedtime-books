"use client";
import Link from "next/link";
import React from "react";
import FooterPage from "../_Components/FooterPage";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

function Author() {
  const router = useRouter();

  const NextPageBtnHandler = (e) => {
    e.preventDefault();
    router.push("/eng/01");
  };

  return (
    <>
      <section className="w-full h-auto bg-cover select-none">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-start text-2xl font-medium sm:text-xl md:text-2xl lg:text-3xl">
              About Author
            </h2>
            <p className="text-justify sm:text-sm md:text-base lg:text-lg leading-relaxed font-normal text-slate-800">
              Yuvraj Malik is presently the Director, National Book Trust, India
              (under the Ministry of Education, Government of India) since 2020.
              Before joining National Book Trust, India, he has served with the
              Ministry of Defence, Ministry of Home Affairs, Raj Bhawan, Jammu &
              Kashmir, United Nations Missions in Africa, and several operational
              areas in administrative and operational assignments.
            </p>
            <p className="text-justify sm:text-sm md:text-base lg:text-lg leading-relaxed font-normal text-slate-800">
              He is also the Fair Director / CEO of New Delhi World Book Fair,
              which is the biggest B2C Book Fair in the world. He has also been
              the Chairman of the Commission for Scientific & Technical
              Terminology (CSTT), Ministry of Education, Government of India.
            </p>
            <p className="text-justify sm:text-sm md:text-base lg:text-lg leading-relaxed font-normal text-slate-800">
              Under his leadership, National Book Trust, India is implementing
              the prestigious PM-YUVA Mentorship Scheme for Young Authors in 22
              official languages of India and English launched by the Ministry
              of Education, Government of India, as part of Azadi Ka Amrit
              Mahotsav events.
            </p>
            <Link href="mailto:yuvrajmalik117@gmail.com">
              <p className="text-start text-lg font-bold text-slate-800">
                Send Me an Email
              </p>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <CldImage
              src="https://res.cloudinary.com/dydh2rfnk/image/upload/v1734585149/NBT-Chandrayaan3/assets/author/nx1z2v99wxw3egsvgpja.jpg"
              width={493}
              height={506}
              alt="Yuvraj Malik Image"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>
      <FooterPage pageNum1={"00"} pageNum2={"00"} onNext={NextPageBtnHandler} />
    </>
  );
}

export default Author;
