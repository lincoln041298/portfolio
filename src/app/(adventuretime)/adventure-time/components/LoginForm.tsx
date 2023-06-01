import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import React from "react";

const LoginForm = () => {
  return (
    <div className="mt-5">
      <form>
        <div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-black dark:text-light-gold"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input />
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
              <Input placeholder="" />
            </div>
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
