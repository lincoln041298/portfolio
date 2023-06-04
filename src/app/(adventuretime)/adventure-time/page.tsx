import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";

import WorkingExperience from "@/components/aboutme/components/WorkingExperience";
import Image from "next/image";
import { FC } from "react";

import computer from "public/giphy.gif";
import LoginForm from "../../../components/adventuretime/components/LoginForm";

export const metadata: Metadata = {
  title: "About Us | By Linh Nguyen Van",
  description: "Free & open-source text similarity API",
};

const page: FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-x-6">
        <div className="w-full">
          <LargeHeading size={"sm"}>Sign in to your account 🔑</LargeHeading>
          <LoginForm />
        </div>
        <p className="hidden md:flex flex-shrink-0">
          <Image
            src={computer}
            className="img-shadow"
            quality={100}
            width={500}
            height={500}
            alt="funny Image"
          />
        </p>
      </div>
    </div>
  );
};

export default page;
