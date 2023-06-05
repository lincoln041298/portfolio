"use client";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { FC, MutableRefObject, useRef } from "react";

interface LoginFormProps {
  userName: MutableRefObject<string>;
  pass: MutableRefObject<string>;
  onSubmit: () => Promise<void>;
}

const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const { onSubmit, pass, userName } = props;

  return (
    <div className="mt-5">
      <div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-black dark:text-light-gold"
          >
            Email address
          </label>
          <div className="mt-2">
            <Input
              onChange={(e: any) => {
                userName.current = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-black dark:text-light-gold"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <Input
              placeholder=""
              onChange={(e: any) => {
                pass.current = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            onClick={onSubmit}
            className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
