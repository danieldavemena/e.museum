"use client";

import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

const authGate = () => {
  const [mode, setMode] = useState(<Login />);
  const [page, setPage] = useState("login");
  const [modeText, setModeText] = useState("Register now");
  const [modeMes, setModeMes] = useState("Not a user yet?");

  const modeSelect = () => {
    if (page == "login") {
      setMode(<SignUp />);
      setPage("register");
      setModeText("Log in to your account");
      setModeMes("Already a user?");
    } else if (page == "register") {
      setMode(<Login />);
      setPage("login");
      setModeText("Register now");
      setModeMes("Not a user yet?");
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {mode}
      <div className="topbar-font items-center justify-center mt-5 text-xl flex flex-row gap-3">
        <h2 className="text-gray-400">{modeMes}</h2>
        <h2 onClick={modeSelect} className="cursor-pointer text-gray-200">
          {modeText}
        </h2>
      </div>
    </div>
  );
};

export default authGate;
