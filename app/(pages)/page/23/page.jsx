"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page23() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/22");
  };

  const nextPageHandler = () => {
    router.push("/page/24");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"44"}
        pageNum2={"45"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
