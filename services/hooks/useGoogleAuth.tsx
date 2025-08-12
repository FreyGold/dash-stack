// hooks/useGoogleAuth.ts
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useGoogleAuth = () => {
   const router = useRouter();

   const initiateGoogleAuth = async () => {
      try {
         // Step 1: Fetch Google Auth URL from our API
         const response = await axios.get(
            `https://scan-menu-api.up.railway.app/api/client/auth/google/url?redirect_uri=${window.location.href}`,
            {
               headers: {
                  "Content-Type": "application/json: charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
               },
            }
         );

         //  if (!response.ok) {
         //     throw new Error("Failed to fetch Google auth URL");
         //  }

         //  const data = await response.json();
         const authUrl = response.data.data.authUrl;
         console.log(authUrl);
         window.location.href = authUrl;
      } catch (error) {
         console.error("Google auth initiation failed:", error);
      }
   };

   useEffect(() => {
      const handleCallback = () => {
         const urlParams = new URLSearchParams(window.location.search);
         const token = urlParams.get("token");

         if (token) {
            localStorage.setItem("googleAuthToken", token);
            sessionStorage.setItem("googleAuthToken", token);

            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, "", cleanUrl);

            router.push("/dashboard");
         }
      };

      handleCallback();
   }, [router]);

   return { initiateGoogleAuth };
};
