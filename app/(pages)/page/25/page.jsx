"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page25() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/24");
  };

  const nextPageHandler = () => {
    router.push("/page/26");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"48"}
        pageNum2={"49"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
