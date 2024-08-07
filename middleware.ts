import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const appRouter = createRouteMatcher(["/", "/products(.*)", "/about"]);
const adminRouter = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  console.log(auth().userId?.toString(), process.env.IS_ADMIN_USER);
  const isAdminUser = auth().userId === process.env.IS_ADMIN_USER;
  console.log(isAdminUser);
  if (adminRouter(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  if (!appRouter(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
