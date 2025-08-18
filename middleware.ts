import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(req: NextRequest) {
   const res = intlMiddleware(req);

   const supabase = createMiddlewareClient({ req, res });

   const {
      data: { user },
   } = await supabase.auth.getUser();

   if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
   }

   return res;
}

export const config = {
   matcher: ["/((?!api|_next|.*\\..*).*)"],
};
