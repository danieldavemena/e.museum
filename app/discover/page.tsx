"use client";

import React, { useState, useEffect } from "react";
import Topbar from "../components/topbar";
import supabase from "@/lib/initSupabase";

const page = () => {
  const [data, setData] = useState<{ id: string; title: string }[]>([]);
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

  return (
    <div>
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
      <div className="fixed bottom-0 right-5 h-12 w-12 bg-gray-900  m-5 rounded-3xl"></div>
    </div>
  );
};

export default page;
