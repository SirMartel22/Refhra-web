import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "invalid email" }),
  password: z.string().min(8, { message: "password is required" }),
  username: z
    .string()
    .min(1, { message: "username is required" })
    .min(3, { message: "username should be at least 3 characters" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(8, { message: "password is required" }),
  rememberMe: z.boolean().default(false).optional(),
});

export const ResetPassword = z
  .object({
    password: z.string().min(8, { message: "password is required" }),
    confirmPassword: z
      .string()
      .min(8, { message: "confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });
