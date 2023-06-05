"use client";

import LargeHeading from "@/components/ui/LargeHeading";
import { useRef } from "react";

import LoginForm from "@/components/adventuretime/components/LoginForm";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/adventure-time",
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-x-6">
        <div className="w-full">
          <LargeHeading size={"sm"}>Sign in to your account 🔑</LargeHeading>
          <LoginForm userName={userName} pass={pass} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
