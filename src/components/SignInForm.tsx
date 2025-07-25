"use client"

import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import type { FieldPath, Control } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(30),
    password: z.string().min(8),
})

const SignInForm = () => {

    const form = useForm < z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    })


    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Field */}

            <SigninFormField
                name="email"
                label="Email"
                placeholder="Email"
                inputType="Email"
                formControl={form.control}
                description=""
            />

            <SigninFormField
                name="username"
                label="Username"
                placeholder="Username"
                description="At leat 3 characters"
                formControl={form.control}
            />

            <SigninFormField
                name="password"
                label="Password"
                placeholder="Password"
                inputType="password"
                description="At least 8 characters"
                formControl={form.control}
                
            />
                <Button type="submit" className="w-48 p-6 my-6">Sign In</Button>
            </form>
        </Form>
    )
}

interface SigninFormFieldProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    description: string;
    inputType?: string;
    formControl: Control <z.infer <typeof formSchema>, undefined>
}

const SigninFormField: React.FC<SigninFormFieldProps> = ({
    name,label, placeholder, description, inputType, formControl
}) => {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <input
                            placeholder={placeholder} type={inputType || 'text'}
                            {...field}
                            autoComplete={name}
                            className= 'border border-300 focus:border-blue-500 focus:rind-1 focus:rind-blue-500 shadow-sm px-4 py-2 text-gray-800 placeholder-gray-400 outline-none transition duration-200 rounded-lg'
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SignInForm