import React from "react";
import Image from "next/image";
import { LuArrowBigLeft } from "react-icons/lu";

interface props {
  src: string;
  closing: () => void;
}

const seepost: React.FC<props> = ({ src, closing }) => {
  return (
    <div className="fixed z-10 top-0 left-0 h-screen w-screen animate-fade-in flex flex-row items-center justify-center">
      <div className="bg-gray-300 rounded-lg">
        <div className="h-[600px] w-[1000px] overflow-hidden relative m-5">
          <div
            onClick={closing}
            className="absolute top-0 right-0 cursor-pointer bg-red-400 rounded-lg size-max p-1"
          >
            <LuArrowBigLeft color="oklch(0.967 0.003 264.542)" size={30} />
          </div>
          <div className="flex flex-row h-full">
            <div className="bodyBG rounded-lg w-2/3 ml-0 mr-auto flex flex-col items-center justify-center">
              <Image
                src={src}
                width={0}
                height={0}
                unoptimized
                className="object-contain w-auto h-full "
                alt="uploaded_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default seepost;
