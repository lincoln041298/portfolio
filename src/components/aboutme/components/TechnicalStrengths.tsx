import { Icons } from "@/components/Icons";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { TECHNICAL_STRENGTHS, WORKING_EXPERIENCE } from "@/templeteData";
import Link from "next/link";
import React, { FC } from "react";

const TechnicalStrengths: FC = () => {
  return (
    <div>
      {TECHNICAL_STRENGTHS.map((list) => (
        <section className="mt-5" key={list.id}>
          <div className="flex items-center justify-start">
            <Paragraph className="font-semibold dark:text-white lg:text-left mb-0 p-2">
              {list.name}:
            </Paragraph>
            <Paragraph
              size="sm"
              className="font-light dark:text-white lg:text-left mb-0 p-2"
            >
              {list.list_language}
            </Paragraph>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TechnicalStrengths;
