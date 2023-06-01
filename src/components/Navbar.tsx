import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import ThemeToggle from "./ThemeToggle";
import { Icons } from "./Icons";

const Navbar = () => {
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
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documantation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
