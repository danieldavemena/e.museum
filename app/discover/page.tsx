"use client";

import React, { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import ModalElement from "../components/modalelement";
import supabase from "@/lib/initSupabase";
import { LuCirclePlus } from "react-icons/lu";
import Image from "next/image";
import SeePost from "../components/seepost";

const page = () => {
  const [data, setData] = useState<
    { id: string; image: string; post_description: string; title: string }[]
  >([]);
  const [modal, setModal] = useState(false);
  const [blur, setBlur] = useState("");
  const [isLoading, setComplete] = useState(true);
  const [postID, setPostID] = useState<string | null>(null);
  const [postImage, setImage] = useState<string>("");

  const getData = async () => {
    const { data, error } = await supabase
      .from("user_posts")
      .select()
      .order("id", { ascending: false });
    if (error) {
      console.log(error);
    }

    if (data) {
      setData(data || []);
    }
  };

  useEffect(() => {
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

  const closePost = () => {
    setPostID(null);

    console.log(postID);
  };

  return (
    <div>
      <div className={`${blur} transition duration-150 ease-in-out`}>
        <Topbar />
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 p-10 [&>*]:rounded-lg [&>:not(:first-child)]:mt-4">
          {data.map((datas) => {
            return (
              <div
                className="text-gray-300 flex flex-col cursor-pointer gap-4 hover:scale-[1.02] hover:shadow-[0_0_10px_#ffffff] transition-all duration-150 ease-in-out"
                key={datas.id}
                onClick={() => {
                  setImage(datas.image);
                }}
              >
                <Image
                  src={datas.image}
                  width={500}
                  height={500}
                  unoptimized
                  className="object-cover rounded-lg"
                  alt="post"
                />
                {datas.title}
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
      {/* Modal to see Post */}
      {postImage != "" && (
        <SeePost src={postImage} closing={() => setImage("")} />
      )}
      {modal && <ModalElement closing={postModal} update={getData} />}
    </div>
  );
};

export default page;
