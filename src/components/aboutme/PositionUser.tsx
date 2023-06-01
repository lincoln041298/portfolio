import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import React from "react";

export const PositionUser = () => {
  const INFORMATION_USER = {
    name: "Linh Nguyen Van",
    phone: "0363924455",
    email: "nguyenvanlinh041298@gmail.com",
    linkedin: "https://www.linkedin.com/in/linhnv041298",
    location: "DaNang city, VietNam",
  };
  return (
    <div>
      <LargeHeading size="lg" className="three-d dark:text-white">
        {INFORMATION_USER.name}
      </LargeHeading>
      <Link href={`tel:${INFORMATION_USER.phone}`}>
        <Paragraph className="max-w-xl font-semibold lg:text-left pt-4">
          📞 Phone: {INFORMATION_USER.phone}
        </Paragraph>
      </Link>
      <Link href={`mailto:${INFORMATION_USER.email}`}>
        <Paragraph className="max-w-xl font-semibold lg:text-left pt-2">
          📫 Email: {INFORMATION_USER.email}
        </Paragraph>
      </Link>
      <Link href={INFORMATION_USER.linkedin} target="_blank">
        <Paragraph className="max-w-xl font-semibold lg:text-left pt-2">
          ℹ LinkedIn: {INFORMATION_USER.linkedin.split("https://www.")}
        </Paragraph>
      </Link>
      <Paragraph className="max-w-xl font-semibold lg:text-left pt-2">
        🌏 Location: {INFORMATION_USER.location}
      </Paragraph>
    </div>
  );
};
