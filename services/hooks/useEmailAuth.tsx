"use client";
import { supabase } from "@/libs/supabase/supabaseClient";

export const useEmailAuth = () => {
  const loginWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error && data.session) {
      localStorage.setItem("supabaseSession", JSON.stringify(data.session));
    }
    if (error) {
      console.error("Login Error:", error.message);
      return { user: null, error };
    }

    return { user: data.user, error: null };
  };

  const signUpWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("Signup Error:", error.message);
      return { user: null, error };
    }
    return { user: data.user, error: null };
  };

  return { loginWithEmail, signUpWithEmail };
};
