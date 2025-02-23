"use client"

import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import supabase from "@/lib/initSupabase";

const account = () => {

  const [email, setEmail] = useState<String>()
  const [dropdown, setDropdown] = useState("none")

  
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email?.toString())
      }

    };

    getUser();
  });

  const openDropdown = () => {
    if (dropdown == "none") {
      setDropdown("flex")
    } else {
      setDropdown("none")
    }
  }


  return (
    <div>
      <div className="fixed w-min p-5 items-end flex flex-col gap-5 top-0 right-0">
        <div onClick={openDropdown} className="absolute h-10 w-10  bg-gray-900 rounded-3xl">
        </div>

        <div style={{
          display: dropdown
        }} className="absolute top-20 shadow-md  transition-opacity duration-300 ease-in-out flex-col p-2 shadow-gray-800 bg-gray-900 rounded-md h-[400px] w-[250px]">
          <h3 className="text-gray-500 flex-grow">{email}</h3>
          <button onClick={logout} className="bg-red-400 text-gray-200 rounded-md py-2 ">Log out</button>
        </div>
      </div>
    </div>
  );
};


export default account;
