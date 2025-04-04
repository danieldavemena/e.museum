import React from "react";
import Image from "next/image";

interface props {
  src: string;
}

const seepost: React.FC<props> = ({ src }) => {
  return (
    <div className="fixed z-10 top-0 left-0 h-screen w-screen ">
      <div className="size-[300px] overflow-hidden relative">
        <Image
          src={src}
          alt=""
          width={500}
          height={500}
          layout="intrinsic"
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default seepost;
