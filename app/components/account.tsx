import React from "react";
import { logout } from "../auth/auth";

const account = () => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={logout} className="bg-gray-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default account;
