import FooterMain from "@/Components/FooterMain";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-[100vw] h-[100vh] bgHome overflow-hidden">
        <div className="flex items-end justify-end pr-5 py-10">
          <Image
            src="/images/icons/lang.png"
            alt="Language Icon"
            width={56}
            height={56}
            quality={100}
            priority={true}
            className="w-14 h-14 animate-pulse cursor-pointer"
          />
        </div>
        <div className="xl:w-[30rem] xl:max-h-80 mx-auto top-12 flex items-center justify-center">
          <Image
            src="/images/home/homePageBG1.png"
            alt="Chandrayaan 3"
            width={610}
            height={610}
            quality={100}
            priority={true}
            className="mt-5 2xl:w-[38rem] 2xl:bottom-48"
            style={{height: "auto", width: "auto"}}
          />
        </div>
      </section>
      <FooterMain />
    </>
  );
}
