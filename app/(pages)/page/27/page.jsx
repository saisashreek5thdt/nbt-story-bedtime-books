"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page27() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/26");
  };

  const nextPageHandler = () => {
    router.push("/page/27");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"52"}
        pageNum2={"53"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
