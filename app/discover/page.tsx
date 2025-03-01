"use client";

import React, { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import supabase from "@/lib/initSupabase";
import { LuFileImage, LuArrowBigLeft, LuCirclePlus } from "react-icons/lu";
import Image from "next/image";
import { url } from "inspector";



const page = () => {
  const [data, setData] = useState<{id: string, image: string }[]>([]);
  const [modal, setModal] = useState(false)
  const [blur, setBlur] = useState("")
  
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
  });

  const postModal = () => {
    if (modal == false) {
      setModal(true)
      setBlur("blur-md")
    } else {
      setModal(false)
      setBlur("")
    }
  }

  

  return (
    <div>
      <div className={`${blur} transition duration-150 ease-in-out`}>
      <Topbar />
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 p-5 [&>*]:rounded-lg [&>!first-child]:mt-3">
        {data.map((datas) => {
          return (
            <div className="bg-gray-200" key={datas.id}>
              <Image src={datas.image} layout="intrinsic" width={0} height={0} alt="post"/>
            </div>
          );
        })}
      </div>
      </div>
      <div onClick={postModal} className={`${blur} fixed flex flex-col items-center justify-center bottom-0 right-5 size-[70px] bg-gray-900 m-5 rounded-full`}><LuCirclePlus color="oklch(0.552 0.016 285.938)" size={50} /></div>
      {modal && (
        <ModalElement closing={postModal}/>
      )} 
    </div>
  );
};

interface ModalElementProps {
  closing: () => void;
}

const ModalElement: React.FC<ModalElementProps> = ({ closing }) => {

  const [photoFile, setFile ] = useState<File | null>()
  const [preview, setPreview] = useState("")
  const [fileString, setFilestring] = useState("")

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile)
      setFilestring(`/${selectedFile.name}`)
      const url = URL.createObjectURL(selectedFile)
      setPreview(url)
    }
  }


  const upload = async() => {
    if (photoFile != null) {
      const {data, error} = await supabase.storage.from('posts').upload(fileString, photoFile)

      
      if (data) {
        const {data} = await supabase.storage.from('posts').getPublicUrl(fileString)
        if (data) {
          
          const {error} = await supabase.from('user_posts').insert({image: data.publicUrl})

        }
      }
    }
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full animate-fade-in opacity-50 bg-gray-900 "></div>
      <div className="fixed p-5 rounded-lg bg-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div onClick={closing} className="absolute bg-red-400 rounded-lg top-0 right-0 p-1 m-5">
          <LuArrowBigLeft color="oklch(0.967 0.003 264.542)" size={30}/>
        </div>
        <form onSubmit={(e: React.FormEvent) => {e.preventDefault()}} className="topbar-font mt-12 flex flex-col gap-5">
          <div className="flex flex-row gap-5">
          <textarea
            className="w-[400px] h-[200px] rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
          />
        <label htmlFor="file-select">
          <div className="flex flex-col items-center rounded-lg justify-center bg-gray-300 h-[200px] w-[200px]">
            {photoFile ? <Image src={preview} height={200} width={200} alt="uploaded_image"/> : <LuFileImage color="oklch(0.552 0.016 285.938)" size={50}/>}
          </div>
        </label>

        
        <input onChange={fileChange} className="hidden" type="file" name="" id="file-select" />
          </div>
          <div>
            <button onClick={upload} className="text-gray-400 bg-gray-900 rounded-lg py-2 px-5">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default page;
