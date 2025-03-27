"use client";

import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import supabase from "@/lib/initSupabase";
import Link from "next/link";
import Image from "next/image";
import profile from "@/public/devImages/profile.jpg";

const account = () => {
  const [email, setEmail] = useState<String>();
  const [dropdown, setDropdown] = useState(false);
  const separator = (color: string) => {
    return <div className={`h-[2px] w-full mt-4 rounded-full ${color}`}></div>;
  };

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email?.toString());
      }
    };

    getUser();
  }, []);

  const openDropdown = () => {
    if (dropdown == false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <div className="topbar-font sticky w-full p-5 text-lg items-end flex flex-col gap-5 top-0 right-5">
        <div className="flex text-white ml-0 mr-auto gap-8">
          <Link href="/" className="text-gray-300">
            Back to E.museum
          </Link>
        </div>
        <div
          onClick={openDropdown}
          className="absolute h-12 w-12  bg-gray-900 rounded-3xl"
        ></div>
        {dropdown && <DropdrownElement email={email} />}
      </div>
      <main className="flex flex-row">
        <aside className=" p-5 flex flex-col">
          <div className="rounded-md relative w-[375px] p-5 bg-gray-300">
            <div className="flex flex-row">
              <div className="size-[55px] rounded-full  overflow-hidden">
                <Image src={profile} alt="Profile" className="object-contain" />
              </div>
              <div className="ml-3 flex flex-col">
                <p className="banner-font text-[20px]">isnotDave</p>
                <p className="topbar-font">[insert Bio]</p>
              </div>
            </div>
            {separator("bg-gray-400")}
            <div className="flex flex-row ml-2 mr-2 mt-4 text-gray-900">
              <div>
                <p className="topbar-font">Account Age: </p>
                <p className="topbar-font">Artworks: </p>
                <p className="topbar-font">Stars: </p>
              </div>
              <div className="mr-0 ml-auto">
                <p className="topbar-font">5 </p>
                <p className="topbar-font">8 </p>
                <p className="topbar-font">69 </p>
              </div>
            </div>
          </div>
          <section className="mt-5 ml-2 mr-2">
            <header className="flex flex-row text-gray-500 topbar-font text-[23px]">
              <p>Folders</p>
              <p className="ml-auto mr-0">2 </p>
            </header>
            {separator("bg-gray-700")}
            <div className="mt-4 banner-font w-full flex flex-col gap-2 text-[18px] cursor-pointer [&>*]:rounded-md">
              <p className="p-2  hover:bg-gray-800 text-gray-500">Public</p>
              <p className="p-2 hover:bg-gray-800 text-gray-500">Private</p>
            </div>
          </section>
        </aside>
        <div className="flex flex-1 p-5">
          <div className=" rounded-md bg-yellow-300 size-[500px]"></div>
        </div>
      </main>
    </div>
  );
};

interface DropdrownElementProps {
  email: String | undefined;
}

const DropdrownElement: React.FC<DropdrownElementProps> = ({ email }) => {
  return (
    <div
      className={`absolute top-20 flex animate-fade-in shadow-md items-center w-max [&>*]:transition duration-300 ease-in-out flex-col p-2 shadow-gray-800 bg-gray-900 rounded-md`}
    >
      <h3 className="text-gray-500 flex-grow">{email}</h3>
      <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2  py-2">
        View profile
      </h3>
      <h3 className="hover:bg-gray-800 cursor-pointer text-gray-500 w-full px-2 py-2">
        Settings
      </h3>
      <button
        onClick={logout}
        className="mt-5 bg-red-400 w-full text-gray-200 rounded-md py-2 "
      >
        Log out
      </button>
    </div>
  );
};

export default account;
