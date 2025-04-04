"use client";
import React, { useState } from "react";
import supabase from "@/lib/initSupabase";
import { LuArrowBigLeft, LuFileImage } from "react-icons/lu";
import Image from "next/image";

interface props {
  closing: () => void;
  update: () => void;
}

const ModalElement: React.FC<props> = ({ closing, update }) => {
  const [photoFile, setFile] = useState<File | null>();
  const [title, setTitle] = useState("");
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

  const titleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
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
          const { error } = await supabase.from("user_posts").insert({
            title: title,
            post_description: descript,
            image: data.publicUrl,
          });
        }

        update();
        closing();
      }
    }
  };

  return (
    <div>
      <div className="fixed bg-transparent w-full h-full  animate-fade-in top-0 left-0">
        <div
          onClick={closing}
          className="absolute cursor-pointer bg-red-400 rounded-lg top-0 right-0 p-1 m-5"
        >
          <LuArrowBigLeft color="oklch(0.967 0.003 264.542)" size={30} />
        </div>
        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
          }}
          className="topbar-font flex flex-row"
        >
          <div className="flex flex-col w-[50svw] bg-gray-200 justify-center items-center ">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                Title:
              </label>
              <textarea
                onChange={titleChange}
                className="w-[500px] h-[40px] resize-none rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                Post Description:
              </label>
              <textarea
                onChange={descriptionChange}
                className="w-[500px] h-[200px] resize-none rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
              />
            </div>

            <div className="flex flex-row w-[500px] justify-end gap-3">
              <button
                onClick={upload}
                className="text-gray-400 bg-gray-900 rounded-lg py-2 px-5"
              >
                Upload
              </button>
            </div>
          </div>

          <label htmlFor="file-select">
            <div className="flex flex-col w-[50svw] items-center bodyBG  justify-center  h-screen">
              {photoFile ? (
                <Image
                  src={preview}
                  width={0}
                  height={0}
                  className="object-fit size-auto"
                  alt="uploaded_image"
                />
              ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                  <h2 className="text-2xl text-gray-600">Upload an Image</h2>
                  <LuFileImage color="oklch(0.552 0.016 285.938)" size={80} />
                </div>
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
        </form>
      </div>
    </div>
  );
};

export default ModalElement;
