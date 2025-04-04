import supabase from "@/lib/initSupabase";
import { AuthWeakPasswordError } from "@supabase/supabase-js";
import { AsyncCallbackSet } from "next/dist/server/lib/async-callback-set";
import { redirect } from "next/navigation";
import React from "react";

export async function signIn(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  redirect("/accounts");
}

export async function register(
  email: string,
  displayName: string,
  password: string,
  confirm: string
) {
  const creds = {
    email: email,
    password: password,
  };

  if (password == confirm) {
    const { data, error } = await supabase.auth.signUp(creds);

    redirect("/accounts");
  }
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  redirect("/accounts");
}
