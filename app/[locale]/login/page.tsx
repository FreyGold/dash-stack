import Login from "@/components/layouts/auth/Login";

function page() {
   return (
      <div className="bg-[url('/MainBgHD.png')] bg-cover bg-center bg-no-repeat w-screen h-screen relative flex justify-center items-center">
         <div className="absolute inset-0 flex items-center justify-center ">
            <img
               src="/ShapeHD.png"
               alt="Overlay Object"
               className="w-full h-full object-cover"
            />
         </div>
         <div className="z-1">
            <Login />
         </div>
      </div>
   );
}

export default page;
