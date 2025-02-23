import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="topbar-font sticky top-0 text-xl h-20 px-12 flex w-screen items-center justify-center">
      <div className="flex text-white ml-0 mr-auto gap-8">
        <nav className="flex justify-center gap-8">
          <Link href="/discover">Discover</Link>
          <a href="#">
            <h3>Exhibits</h3>
          </a>
          <a href="#">
            <h3>Artists</h3>
          </a>
          <a href="#">
            <h3 className="animate">Contribute</h3>
          </a>
        </nav>
      </div>
      <div className="flex text-white flex-row gap-3">
        <div className="flex flex-row gap-2 px-4 py-2 bg-gray-900 rounded-3xl">
          <h3>Item</h3>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 bg-gray-900 rounded-3xl">
          <h3>Item</h3>
        </div>
        <Link href="/login">
          <div className="flex flex-row gap-2 px-4 py-2 bg-gray-900 rounded-3xl">
            <h3>Login</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
