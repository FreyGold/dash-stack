// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname, // so that configs & plugins resolve correctly
   recommendedConfig: false, // don’t pull in ESLint’s default
   allConfig: false,
});

export default [
   ...compat.extends(
      "next/core-web-vitals", // Next.js rules
      "next/typescript", // Next.js + TS rules,
      "plugin:@typescript-eslint/recommended"
   ),

   // You may need to explicitly enable parser & TS plugin
   {
      languageOptions: {
         parserOptions: {
            project: "./tsconfig.json", // if using TypeScript
         },
      },
   },
];
