"use client"

import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import supabase from "@/lib/initSupabase";

const account = () => {

  const [email, setEmail] = useState<String>()

  
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


  return (
    <div>
     <div className="grid grid-flow-col grid-rows-2 gap-5 p-5">
     <div className="row-span-2 row-start-2">
        <div className="flex flex-col bg-gray-200 p-[25px] rounded-lg">
          <div className="flex-grow text-md text-gray-700">
            {email}
          </div>
          <form >
            <button formAction={logout} className="topbar-font text-xl shadow-md shadow-gray-400 text-gray-200 bg-red-500 rounded-lg w-[100%] h-10 self-end">
              <h1>Log out</h1>
            </button>
          </form>
        </div>
      </div>
     </div>
    </div>
  );
};

export default account;
