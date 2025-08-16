"use client";

// import { useSearch } from "@/services/context/SearchProvider";

import { SearchOutlined } from "@ant-design/icons";
import { Input as AntDInput } from "antd";
import { useTranslations } from "next-intl";
import { useState, useRef } from "react"; // Import useRef and useEffect

function SearchInput({ isMobile }: { isMobile: boolean }) {
   const t = useTranslations("dashboard");
   const searchPlaceholder = t("headerSearchPlaceholder");
   //  const { setSearch } = useSearch();

   const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (debounceTimeoutRef.current) {
         clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
         //  setSearch(value);
      }, 600);
   };

   const [isOpen, setIsOpen] = useState(false);
   const widthStarter = isMobile ? 12 : 24;
   const width = isOpen ? `${widthStarter + 6}rem` : `${widthStarter}rem`;

   return (
      <AntDInput
         placeholder={searchPlaceholder}
         type="text"
         variant="borderless"
         onChange={handleChange}
         prefix={<SearchOutlined className="mx-1" />}
         onFocus={() => setIsOpen(true)}
         onBlur={() => setIsOpen(false)}
         size="large"
         style={{
            width: width,
            backgroundColor: "var(--c-background-dark)",
            borderColor: "var(--c-background-border)",
            borderRadius: "2rem",
            height: "110%",
            transition: "width  300ms ease-in-out",
         }}
      />
   );
}

export default SearchInput;
