"use client";

import React, { useEffect, useState } from "react";
import AuthGate from "../components/authgate";
import supabase from "@/lib/initSupabase";
import Account from "../components/account";

const page = () => {
  const [user, setUser] = useState(false);
  const [display, setDisplay] = useState(<></>);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(true);
        setDisplay(<Account />);
      } else {
        setUser(false);
        setDisplay(<AuthGate />);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      {/* {display} */}
      <Account />
    </div>
  );
};

export default page;
