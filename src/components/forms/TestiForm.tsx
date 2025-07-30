"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import google from "@/components/icons/google.svg";

// 1. ✅ Zod schema
const loginFormSchema = z.object({
  email: z.string().email("Invalid email"),
  userName: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

const TestForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 2. ✅ React Hook Form config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  // 3. ✅ Submission handler
  const onSubmit = (data: LoginFormData) => {
    console.log("✅ Valid Form Submission:", data);
    // You can now send `data` to your backend or auth logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6 flex-col">
      <div className="flex space-y-4 flex-col">
        {/* Email */}
        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <Input
            id="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Username */}
        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="userName" className="text-sm">
            Username
          </label>
          <Input
            id="userName"
            placeholder="e.g Oluwarotimi_"
            {...register("userName")}
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 font-normal text-sm">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <div className="flex border border-border rounded-sm pr-3 w-full items-center flex-row">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password")}
              className="flex-1 border-none focus:ring-0 shadow-none"
            />

            <Button
              type="button"
              className="hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              variant="ghost"
            >
              {showPassword ? (
                <Eye className="text-[#667085]" />
              ) : (
                <EyeOffIcon className="text-[#667085]" />
              )}
            </Button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <Button type="submit" className="mt-4">
          Create Account
        </Button>
      </div>

      {/* Sign in with Google (static) */}
      <div className="flex space-y-[10px] flex-col">
        <Button className="rounded-[8px] bg-transparent border flex items-center gap-2 text-black shadow-none">
          <Image src={google} height={24} width={24} alt="google icon" />
          <span>Sign in with Google</span>
        </Button>

        <Button className="rounded-[8px] bg-transparent border flex items-center gap-2 text-black shadow-none">
          <Image src={google} height={24} width={24} alt="google icon" />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </form>
  );
};

export default TestForm;
