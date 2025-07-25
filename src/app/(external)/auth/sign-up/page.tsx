'use client'
import Link from 'next/link'
import SignupForm from '@/components/ui/SignupForm'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from "react-icons/fa6"
import { FaApple } from "react-icons/fa"



export default function SignUp() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white py-20">
            <section className="w-2/5 max-w-5xl rounded-md bg-gray-100 p-8 space-y-12">
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Sign Up</h1>
                </div>

                <SignupForm />

                <div className="space-y-12">
                    <p className="text-2xl mb-8"> Or Sign Up With</p>
                    <div className="flex gap-12">
                        <FaFacebookF className="text-5xl" />
                        <FcGoogle className="text-5xl" />
                        <FaApple className="text-5xl" />
                    </div>
                </div>

                <p>Already Have an Account? {" "}</p>
                <Link href="sign-in" className="underline underline-offset-3">Sign In</Link>
            </section>
        </div>
    )
}