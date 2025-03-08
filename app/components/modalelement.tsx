"use client";
import React, { useState } from "react";
import supabase from "@/lib/initSupabase";
import { LuArrowBigLeft, LuFileImage } from "react-icons/lu";
import Image from "next/image";

interface ModalElementProps {
  closing: () => void;
}

const ModalElement: React.FC<ModalElementProps> = ({ closing }) => {
  const [photoFile, setFile] = useState<File | null>();
  const [descript, setDescript] = useState("");
  const [preview, setPreview] = useState("");
  const [fileString, setFilestring] = useState("");

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFilestring(`/${selectedFile.name}`);
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
    }
  };

  const descriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputDesc = e.target.value;
    setDescript(inputDesc);
  };

  const upload = async () => {
    if (photoFile != null) {
      const { data, error } = await supabase.storage
        .from("posts")
        .upload(fileString, photoFile);

      if (data) {
        const { data } = await supabase.storage
          .from("posts")
          .getPublicUrl(fileString);
        if (data) {
          const { error } = await supabase
            .from("user_posts")
            .insert({ post_description: descript, image: data.publicUrl });
        }
      }
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full animate-fade-in opacity-50 bg-gray-900 "></div>
      <div className="fixed p-5 rounded-lg bg-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={closing}
          className="absolute bg-red-400 rounded-lg top-0 right-0 p-1 m-5"
        >
          <LuArrowBigLeft color="oklch(0.967 0.003 264.542)" size={30} />
        </div>
        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
          }}
          className="topbar-font mt-12 flex flex-col gap-5"
        >
          <div className="flex flex-row gap-5">
            <textarea
              onChange={descriptionChange}
              className="w-[400px] h-[200px] rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
            />
            <label htmlFor="file-select">
              <div className="flex flex-col items-center rounded-lg justify-center bg-gray-300 h-[200px] w-[200px]">
                {photoFile ? (
                  <Image
                    src={preview}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg overflow-y-hidden w-full h-auto "
                    alt="uploaded_image"
                  />
                ) : (
                  <LuFileImage color="oklch(0.552 0.016 285.938)" size={50} />
                )}
              </div>
            </label>

            <input
              onChange={fileChange}
              className="hidden"
              type="file"
              name=""
              id="file-select"
            />
          </div>
          <div className="flex flex-row gap-5">
            <input
              type="text"
              name=""
              id=""
              className="rounded-lg bg-gray-300"
            />
            <button
              onClick={upload}
              className="text-gray-400 bg-gray-900 rounded-lg py-2 px-5"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalElement;
