import { Inter } from "next/font/google";
import LargeHeading from "@/components/ui/LargeHeading";

import type { Metadata } from "next";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

import MyLogo from "public/typewriter.png";
import { Icons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "LinhNV Portfolio",
  description: "This is my portfolio design by LinhNV",
};

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Website Portfolio <br />
            Linh Nguyen Van
          </LargeHeading>

          <Paragraph className="max-w-xl lg:text-left">
            <Link
              href="/about-me"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              <span className="flex items-center justify-start">
                About me
                <Icons.ArrowLeft className="animate-pulse direction-alternate ml-2 mt-1.5 h-4 w-4 " />
              </span>
            </Link>
          </Paragraph>

          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow "
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
