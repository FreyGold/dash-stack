"use client";

import { Select } from "antd";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState("en");
  const router = useRouter();

  useEffect(() => {
    const locale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    if (locale) {
      setSelected(locale);
    } else {
      setSelected("en");
    }
  }, []);
  const currentPath = usePathname(); // gets the route path (like '/about')

  const handleChange = (value: string) => {
    document.cookie = `locale=${value}; path=/`;
    console.log(currentPath);
    setSelected(value);
    if (value == "ar") {
      router.push(currentPath.replace("/en", "/ar"));
    } else {
      router.push(currentPath.replace("/ar", "/en"));
    }
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={selected}
        style={{ minWidth: 100 }}
        onChange={handleChange}
        options={[
          {
            value: "en",
            label: "English",
          },
          {
            value: "ar",
            label: "العربية",
          },
        ]}
      />
    </div>
  );
}
