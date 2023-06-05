import { Metadata } from "next";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

import computer from "public/giphy.gif";
import { PrismaClient } from "@prisma/client";

export const metadata = {
  title: "About Us | By Linh Nguyen Van",
  description: "Free & open-source text similarity API",
};

const page = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({ where: { authorId: 3 } });
  console.log("post", posts);
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-x-6">
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
