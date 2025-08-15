"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Home() {
   const t = useTranslations("dashboard");
   const router = useRouter();
   return <>{router.push("/dashboard")}</>;
}
