/* eslint-disable react-hooks/rules-of-hooks */

import Image from "next/image";

import computer from "public/giphy.gif";
import { useEffect } from "react";

export const metadata = {
  title: "About Us | By Linh Nguyen Van",
  description: "Free & open-source text similarity API",
};

const page = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-x-6">
        <p className="hidden md:flex flex-shrink-0">
          <Image
            src={computer}
            className="img-shadow"
            priority
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
