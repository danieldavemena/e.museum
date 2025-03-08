"use client";

import React, { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import ModalElement from "../components/modalelement";
import supabase from "@/lib/initSupabase";
import { LuFileImage, LuArrowBigLeft, LuCirclePlus } from "react-icons/lu";
import Image from "next/image";

const page = () => {
  const [data, setData] = useState<
    { id: string; image: string; post_description: string }[]
  >([]);
  const [modal, setModal] = useState(false);
  const [blur, setBlur] = useState("");
  const [isLoading, setComplete] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("user_posts").select();
      if (error) {
        console.log(error);
      }

      if (data) {
        setData(data || []);
      }
    };

    getData();
  }, []);

  const postModal = () => {
    if (modal == false) {
      setModal(true);
      setBlur("blur-md");
    } else {
      setModal(false);
      setBlur("");
    }
  };

  const loaded = () => {
    setComplete(false);
  };

  return (
    <div>
      <div className={`${blur} transition duration-150 ease-in-out`}>
        <Topbar />
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 p-5 [&>*]:rounded-lg [&>:not(:first-child)]:mt-3">
          {data.map((datas) => {
            return (
              <div className="bg-gray-200 p-5" key={datas.id}>
                <Image
                  src={datas.image}
                  width={500}
                  height={500}
                  unoptimized
                  className="object-cover rounded-lg"
                  alt="post"
                  loading="lazy"
                  onLoadingComplete={loaded}
                />
                {datas.post_description}
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={postModal}
        className={`${blur} cursor-pointer fixed flex flex-col items-center justify-center bottom-0 right-5 size-[70px] bg-gray-900 m-5 rounded-full`}
      >
        <LuCirclePlus color="oklch(0.552 0.016 285.938)" size={50} />
      </div>
      {modal && <ModalElement closing={postModal} />}
    </div>
  );
};

export default page;
