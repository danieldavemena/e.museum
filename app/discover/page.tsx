"use client";

import React, { useEffect, useState } from "react";
import Topbar from "../components/topbar";
import supabase from "@/lib/initSupabase";

const page = () => {
  const [data, setData] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("Sample").select();
      setData(data || []);
    };

    getData();
  });

  return (
    <div>
      <Topbar />
      <div className="columns-1 md:columns-2 lg:columns-3 p-5 [&>*]:rounded-lg [&>!first-child]:mt-3">
        {data.map((datas) => {
          return (
            <div className="bg-gray-200" key={datas.id}>
              {datas.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
