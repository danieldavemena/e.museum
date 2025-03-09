"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { tree } from "next/dist/build/templates/app-page";
import supabase from "@/lib/initSupabase";

const Topbar = () => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setSession(true);
      } else {
        setSession(false);
      }
    };

    getUser();
  }, []);

  return (
    <div className="topbar-font z-10 sticky top-0 text-xl h-20 px-12 flex w-screen items-center justify-center">
      <div className="flex text-white ml-0 mr-auto gap-8">
        <nav className="flex justify-center gap-8 [&>*]:cursor-pointer">
          <Link href="/">E.museum</Link>
          <Link href="/discover">Discover</Link>
        </nav>
      </div>
      <div className="flex text-white flex-row gap-3">
        <Link href="/login">
          <div className="flex flex-row gap-2 px-4 py-2 bg-gray-900 rounded-3xl">
            {session ? <div className="size-[25px] "></div> : <h3>Login</h3>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
