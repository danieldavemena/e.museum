import supabase from "@/lib/initSupabase";
import { redirect } from "next/navigation";

export async function signIn(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  redirect("/login");
}

export async function register(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(data);
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
}
