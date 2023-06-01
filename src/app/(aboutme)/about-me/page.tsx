import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import Link from "next/link";
import { PositionUser } from "./components/PositionUser";
import WorkingExperience from "@/app/(aboutme)/about-me/components/WorkingExperience";
import { FC } from "react";

export const metadata: Metadata = {
  title: "About Us | By Linh Nguyen Van",
  description: "Free & open-source text similarity API",
};

const page: FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <PositionUser />
      <div className="mt-5">
        <LargeHeading size={"sm"}>CAREER OBJECTIVE 🔑</LargeHeading>
        <Paragraph className="max-w-full font-semibold lg:text-left pt-2">
          Working for an organization gives to me opportunities develop my
          skills, knowledge, and supports to me to complete with the company
          goals. With the thirst for a Vietnamese, I hope and try to hard to
          make and grow up high-quality products that can be at an international
          level.
        </Paragraph>
        <div className="mt-5">
          <LargeHeading size={"sm"}>WORKING EXPERIENCE 🔑</LargeHeading>
          <WorkingExperience />
        </div>
      </div>
    </div>
  );
};

export default page;
