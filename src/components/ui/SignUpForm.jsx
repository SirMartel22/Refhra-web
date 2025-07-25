'use client'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import type { FieldPath, Control } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from '@/component/ui/form'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@/hookform/resolvers/zod'

const formSchema = z.object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().email(),
    username: z.string().min(3).max(30),
    password: z.string().min(8),
    comfirmPassword: z.string().min(8),
})


const SignUpForm = () => {

    const form = useForm < z.infer < typeof formSchema >> ({
      resolver: zodResolver(formSchema),
      defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
      },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    
  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* {fields} */}
              <SignupFormField
                  name="firstName"
                  label="First Name"
                  placeholder="Input your firstname here "
                  formControl={form.control}
                  description=""
              />

              <SignupFormField
                  name="lastName"
                  label="Last Name"
                  placeholder="Input Your Last Name Here"
                  formControl={form.control}
                  description=""
              />

               <SignupFormField
                  name="email"
                  label="Email"
                  inputType="Email"
                  placeholder="Email: someone@exampple.com"
                  formControl={form.control}
                  description=""
              />

               <SignupFormField
                  name="username"
                  label="Username"
                  placeholder="Input your username here"
                  formControl={form.control}
                  description="At least 3 characters"
              />

               <SignupFormField
                  name="password"
                  label="Password"
                  inputType="Password"
                  placeholder="Type in a Strong password"
                  formControl={form.control}
                  description="At least 8 characters"
              />

               <SignupFormField
                  name="confirmpassword"
                  label="Confirm Password"
                  inputType="Password"
                  placeholder="Re-enter your password"
                  formControl={form.control}
                  description="Must match the above password"
              />

              <Button type="Submit" className="w-48 p-6 my-6">Sign Up</Button>      
          </form>
    </Form>
  )
}


interface SignUpFormFieldProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    description: string;
    inputType: string;
    formControl: Control <z.infer<typeof formSchema>, undefined>
}

const SignupFormField: React.FC<SignUpFormFieldProps> = ({
    name, label, placeholder, description, inputType, formControl
}) => {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <input
                        placeholder={placeholder}
                        type={inputType || 'text'}
                        {...field}
                        autoComplete={name}
                        className="border border-black-300 focus:border-blue-500 focus:rind-1 focus:rind-blue-500 shadow-sm px-4 py-2 text-gray-800 placeholder-gray-400 outline-none transition duration-200 rounded-lg"
                    />
                    <FormControl />
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default SignUpForm
