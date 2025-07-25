"use client"
import SignInForm from '@/components/ui/SignInForm'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa6"
import { FaApple } from "react-icons/fa"
import Link  from "next/link"


export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <section>
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">SignIn</h1>  
                    <p className="text-sm text-neutral-500 font-semibold">
                        {"Don't"} have an account yet ? {" "}
                        <Link href="sign-up" className="underline underline-offset-4"> Sign Up
                            Sign Up
                        </Link> </p>
                        <SignInForm />
                        <div className="space-y-12">
                            <p className="text-2xl mb-8">
                                Or Sign up With 
                            </p>
                            <div className="flex gap-12">
                                <FaFacebookF className="text-5xl" />
                                <FcGoogle className="text-5xl" />
                                <FaApple className="text-5xl" />
                            </div>
                        </div>
                    <p>
                        Already have an Account? {" "}
                        <Link href="sign-in" className="underline underline-offset-4"> Sign In </Link>
                    </p>
                </div>
            </section>
        </div>
    )
}