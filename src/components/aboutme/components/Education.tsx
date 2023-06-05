import { Icons } from "@/components/Icons";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { EDUCATION } from "@/templeteData";
import Link from "next/link";

import React, { FC } from "react";

const Education: FC = () => {
  return (
    <div>
      {EDUCATION.map((list) => {
        return (
          <section key={list.id} className="mt-5">
            <div className="flex items-center">
              <LargeHeading size="sx">{list.school}</LargeHeading>
              <Link href={list.link_university} target="_blank">
                <Icons.Link className="w-4 h-4 ml-2 dark:text-white" />
              </Link>
            </div>

            <div className="flex justify-between w-full mt-3">
              <Paragraph className="font-semibold dark:text-black lg:text-left mb-0 p-2 bg-slate-300 rounded-lg">
                {list.major}
              </Paragraph>
              <div className="flex items-center justify-center">
                <Paragraph className=" font-semibold lg:text-left mb-0">
                  {list.startDate}
                </Paragraph>
                -
                <Paragraph className=" font-semibold lg:text-left mb-0">
                  {list.endDate}
                </Paragraph>
              </div>
            </div>
            <Paragraph className="max-w-full font-semibold lg:text-left pt-2">
              {list.describe}
            </Paragraph>
          </section>
        );
      })}
    </div>
  );
};

export default Education;
