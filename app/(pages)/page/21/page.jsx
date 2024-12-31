"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page21() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/20");
  };

  const nextPageHandler = () => {
    router.push("/page/22");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"40"}
        pageNum2={"41"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
