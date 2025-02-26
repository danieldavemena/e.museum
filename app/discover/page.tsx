"use client";

import React, { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import supabase from "@/lib/initSupabase";



const page = () => {
  const [data, setData] = useState<{ id: string; title: string }[]>([]);
  const [modal, setModal] = useState(false)
  const [blur, setBlur] = useState("")
  
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("Sample").select();
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
      setBlur("blur-lg")
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
              {datas.title}
            </div>
          );
        })}
      </div>
      </div>
      <div onClick={postModal} className="fixed bottom-0 right-5 h-12 w-12 bg-gray-900  m-5 rounded-3xl"></div>
      {modal && (
        <ModalElement closing={postModal}/>
      )} 
    </div>
  );
};

const ModalElement = ({closing}) => {
  return ( 
    <div>
      <div className="fixed top-0 left-0 w-full h-full animate-fade-in  bg-gray-900 opacity-50">
      
      </div>
      <div className="fixed w-20 h-20 bg-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div onClick={closing} className="bg-red-400 h-5 w-5">

          </div>
      </div>
    </div>
  )
}



export default page;
