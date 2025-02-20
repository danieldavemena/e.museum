import React from "react";
import { logout } from "../auth/auth";

const account = () => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form>
          <button formAction={logout} className="bg-gray-200">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default account;
