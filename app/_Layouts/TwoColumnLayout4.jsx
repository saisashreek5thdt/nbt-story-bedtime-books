import React from "react";
import Image from "next/image";

function TwoColumnLayout4({
  textContent1,
  textContent2,
  imageSrc1,
  altText1,
  width1,
  height1,
  imageSrc2,
  altText2,
  width2,
  height2,
}) {
  return (
    <div className={`grid grid-rows-2 grid-cols-2 grid-flow-col h-1/2 `}>
      <div className="h-48 ml-40 mt-8 w-3/4 sm:w-5/6 flex gap-4 flex-col sm:ml-10 sm:mt-8 sm:gap-2 lg:h-48 lg:ml-40 lg:mt-24 lg:w-3/4">
        {textContent1}
      </div>
      {/* {bottom left image } */}
      <div className="">
        <Image
          src={imageSrc1}
          alt={altText1}
          className="bg-cover sm:w-[400px] sm:h-[280px] sm:-mt-4 lg:w-[750px] lg:h-[500px] lg:mt-16"  
          width={width1}
          height={height1}
          priority={true}
          quality={100}
        />
      </div>
      {/* {top  image } */}
      <div className="ml-52">
        <Image
          src="/images/Page1/moonBG.gif"
          alt={altText2}
          className="bg-cover sm:w-[400px] sm:h-[200px] sm:-mt-[2px] sm:-mr-2 lg:w-[750px] lg:h-[400px] lg:-mt-2 lg:ml-2"
          width={width2}
          height={height2}
          priority={true}
          quality={100}
        />
      </div>

      <div className="w-4/5 mt-52  sm:mt-24 sm:ml-8 sm:w-5/6 lg:w-4/5 lg:mt-56 flex gap-4 flex-col">{textContent2}</div>
    </div>
  );
}

export default TwoColumnLayout4;
