"use client";

import React, { useEffect, useState } from "react";
import AuthGate from "../components/authgate";
import Account from "../components/account";
import supabase from "@/lib/initSupabase";

const page = () => {
  const [done, setDone] = useState<React.JSX.Element>();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log(user);

      if (user) {
        setDone(<Account />);
      } else {
        setDone(<AuthGate />);
      }
    };

    getUser();
  }, []);

  return <div>{done}</div>;
};

export default page;
