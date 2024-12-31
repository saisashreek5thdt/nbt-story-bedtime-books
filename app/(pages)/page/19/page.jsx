"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page19() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/18");
  };

  const nextPageHandler = () => {
    router.push("/page/20");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"36"}
        pageNum2={"37"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
