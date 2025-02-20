"use client";

import React, { useEffect, useState } from "react";
import AuthGate from "../components/authgate";
import supabase from "@/lib/initSupabase";
import Account from "../components/account";

const page = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log(user);

      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    };

    getUser();
  });

  return <div>{user ? <Account /> : <AuthGate />}</div>;
};

export default page;
