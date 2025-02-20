"use client";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="fixed m-2 top-0 right-0 h-10 w-10 bg-gray-200"></div>
      <div className="topbar-font fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="banner-font text-5xl flex flex-row gap-5 items-center justify-center my-5">
          <h1 className="  text-gray-400 ">Login to</h1>
          <h1 className="  text-gray-200 ">E.museum</h1>
        </div>

        <div className="bg-gray-200 flex w-[500px] shadow-lg shadow-gray-800 flex-col gap-2 p-5 rounded-xl">
          <h3 className="text-gray-700">Email:</h3>
          <input
            className="rounded-lg bg-gray-300 text-lg p-[5px] mb-5"
            type="text"
          />
          <h3 className="text-gray-700">Password:</h3>
          <input
            className="rounded-lg bg-gray-300 text-lg p-[5px]"
            type="password"
          />
          <button className="text-gray-700  mt-5 bg-gray-300 shadow-md shadow-gray-400 text-xl p-2">
            Login
          </button>
        </div>

        <div className="items-center justify-center mt-5 text-xl flex flex-row gap-3">
          <h2 className="text-gray-400">Not a user yet?</h2>
          <h2 className="text-gray-200">Register Now</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
