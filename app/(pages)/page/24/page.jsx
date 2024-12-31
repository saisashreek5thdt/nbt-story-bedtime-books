"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page24() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/23");
  };

  const nextPageHandler = () => {
    router.push("/page/25");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"46"}
        pageNum2={"47"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
