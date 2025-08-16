import { redirect } from "next/navigation";
import { MainHomePage } from "../../../components/dashboard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return <MainHomePage />;
}

export default Page;
