import Login from "@/components/layouts/auth/login/Login";
import LanguageSwitcher from "@/components/layouts/header/LanguageSwitcher";
import Image from "next/image";

function LoginMainPage() {
  return (
    <div className="bg-[url('/MainBgHD.png')] bg-cover bg-center w-screen h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image
          src="/ShapeHD.png"
          alt="Overlay Object"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-5 top-5">
        <LanguageSwitcher />
      </div>
      <div className="z-1">
        <Login />
      </div>
    </div>
  );
}

export default LoginMainPage;
