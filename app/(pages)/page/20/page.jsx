"use client";
import FooterStory from "@/app/_Components/FooterStory";
import { useRouter } from "next/navigation";

export default function Page20() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/19");
  };

  const nextPageHandler = () => {
    router.push("/page/21");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover select-none"></section>
      <FooterStory
        pageNum1={"38"}
        pageNum2={"39"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
