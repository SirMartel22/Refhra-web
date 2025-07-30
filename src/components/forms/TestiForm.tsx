"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOffIcon } from "lucide-react";
import { Button } from "../ui/button";
import google from "@/components/icons/google.svg";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userFormSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
  profile_url: z.string().url(),
  age: z.number().min(1).nullable(),
  friends: z.array(z.string()).max(2),
  settings: z.object({
    isSuscribed: z.boolean(),
  }),
});

type userForm = z.infer<typeof userFormSchema>;

type loginForm = {
  email: string,
  userName: string,
  password: string
}

const TestForm = () => {
  const [show, setShow] = useState<boolean>(false);
  const [authForm, setAuthForm] = useState<loginForm>({
    email: "",
    userName: "",
    password: ""
  })


  console.log(authForm)

  const onChangePassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log()

    setAuthForm({...authForm})
  }

  const form = useForm<userForm>({
    resolver: zodResolver(userFormSchema),
  });

  const handleSubmit = (data: userForm) => {
    const result = userFormSchema.safeParse(data);

    if (result.success) {
      // handle success
    } else {
      // handle error
    }
  };

  return (
    <div className="flex gap-6 flex-col">
      <div className="flex space-y-4 flex-col">
        {/* email adress input */}
        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <Input
            name="email"
            value={authForm.email}
            onChange={onChangePassword}
            placeholder="Enter your email address"
            className="rounded-sm placeholder:text-sm placeholder:text-[#667085] shadow-none  "
          />
        </div>

        {/* username input */}

        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <Input
            placeholder="e.g Oluwarotimi_"
            name="username"
            className="rounded-sm placeholder:text-sm placeholder:text-[#667085] shadow-none  "
          />
        </div>
        {/* ----------password form ------- */}
        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <div className="flex border border-border rounded-sm pr-3 w-full items-center flex-row">
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="rounded-sm placeholder:text-sm placeholder:text-[#667085] outline-none focus:outline-none focus:border-none border-none focus:ring-0   focus-visible:ring-[0px] shadow-none  "
            />

            <Button
              className="hover:bg-transparent "
              onClick={() => setShow(!show)}
              variant="ghost"
            >
              {show ? (
                <Eye className="font-extralight text-[#667085] " />
              ) : (
                <EyeOffIcon className="font-extralight text-[#667085] " />
              )}
            </Button>
          </div>
        </div>

        <Button onClick={() => handleSubmit()} className="mt-4">
          Create Account
        </Button>
      </div>

      {/* third party sign in */}
      <div className="flex space-y-[10px] flex-col ">
        <Button className=" rounded-[8px] bg-transparent border flex flex-row shadow-none text-black   ">
          <span>
            {" "}
            <Image
              src={google}
              height={24}
              width={24}
              alt="google icon"
              className="h-6 w-6"
            />{" "}
          </span>
          <span>Sign in with Google</span>
        </Button>

        <Button className=" rounded-[8px] bg-transparent border flex flex-row shadow-none text-black   ">
          <span>
            {" "}
            <Image
              src={google}
              height={24}
              width={24}
              alt="google icon"
              className="h-6 w-6"
            />{" "}
          </span>
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default TestForm;
