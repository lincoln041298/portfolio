export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/adventure-time/:path*", "/3d-portfolio/:path*"],
};
