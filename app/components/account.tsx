"use client"

import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import supabase from "@/lib/initSupabase";

const account = () => {

  const [email, setEmail] = useState<String>()
  const [dropdown, setDropdown] = useState("none")
  const [fade, setFade] = useState("animate-fade-in")


  
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
      setFade("animate-fade-in")
      setDropdown("flex")
    } else {
      setFade("animate-fade-out")
      setDropdown("none")
    }
  }


  return (
    <div>
      <div className="topbar-font fixed w-min p-5 text-lg items-end flex flex-col gap-5 top-0 right-5">
        <div onClick={openDropdown} className="absolute h-12 w-12  bg-gray-900 rounded-3xl">
        </div>

        <div style={{
          display: dropdown
        }} className={`absolute top-20 ${fade} shadow-md items-center w-max [&>*]:transition duration-300 ease-in-out flex-col p-2 shadow-gray-800 bg-gray-900 rounded-md`}>
          <h3 className="text-gray-500 flex-grow">{email}</h3>
          <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2  py-2">View profile</h3>
          <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2 py-2">Settings</h3>
          <button onClick={logout} className="mt-5 bg-red-400 w-full text-gray-200 rounded-md py-2 ">Log out</button>
        </div>
      </div>
    </div>
  );
};


export default account;
