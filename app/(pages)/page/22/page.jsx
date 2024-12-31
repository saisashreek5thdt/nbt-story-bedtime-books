"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page22() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/21");
  };

  const nextPageHandler = () => {
    router.push("/page/23");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"42"}
        pageNum2={"43"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
