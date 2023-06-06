"use client";

import Link from "next/link";
import Button, { buttonVariants } from "./ui/Button";
import ThemeToggle from "./ThemeToggle";
import { Icons } from "./Icons";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  if (session && session.user) {
  }
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Portfolio By{" "}
          <span className="text-2xl pl-3 uppercase font-bold dark:font-extrabold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-600">
            LinhNV
          </span>
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        {session && session.user ? (
          <div className="hidden md:flex gap-4">
            <ThemeToggle />
            <Button
              onClick={() => signOut()}
              className={buttonVariants({ variant: "ghost" })}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <ThemeToggle />
            <Button
              onClick={() => signIn()}
              className={buttonVariants({ variant: "ghost" })}
            >
              Adventure Time
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
