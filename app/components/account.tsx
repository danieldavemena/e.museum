import React from "react";
import { logout } from "../auth/auth";
import { redirect } from "next/navigation";

const account = () => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => {
            logout();
            redirect("/login");
          }}
          className="bg-gray-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default account;
