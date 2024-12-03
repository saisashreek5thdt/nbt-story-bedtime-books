import React from "react";
import Image from "next/image";

function TwoColumnLayout1({ imageSrc, altText, children }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Column */}
        <div className="flex flex-col justify-center p-10">{children}</div>
        {/* Image Column */}
        <div className="p-48 relative w-56 h-56 md:h-full">
          <Image
            src={imageSrc}
            alt={altText}
            className="bg-cover w-48 h-80 block ml-64"
            objectFit="cover"
            unoptimized
            priority={true}
            quality={100}
            layout="fill"
          />
        </div>
      </div>
    </>
  );
}

export default TwoColumnLayout1;
