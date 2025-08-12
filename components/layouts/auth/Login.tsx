import {
   FacebookLogoIcon,
   GoogleLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import BrandButton from "./buttons/BrandButton";
import { useTranslations } from "next-intl";

function Login() {
   const t = useTranslations("loginPage");
   return (
      <div className="w-157 h-184 rounded-3xl bg-foreground px-14 py-23 text-text">
         <div className="flex flex-col items-center h-full">
            <h1 className="font-bold text-3xl mb-4">{t("title")}</h1>
            <h3 className="font-medium text-lg opacity-80">
               {t("description")}
            </h3>
            <div className="px-4 gap-20 flex flex-col flex-1 w-full justify-center items-center h-full">
               <BrandButton
                  icon={
                     <GoogleLogoIcon
                        color="var(--c-primary)"
                        size={32}
                        weight="fill"
                     />
                  }
                  message={t("useGoogle")}
               />
               <BrandButton
                  icon={
                     <FacebookLogoIcon
                        color="var(--c-primary)"
                        size={32}
                        weight="fill"
                     />
                  }
                  message={t("useFacebook")}
               />
            </div>
         </div>
      </div>
   );
}

export default Login;
