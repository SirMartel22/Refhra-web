import SignupForm from "@/components/forms/SignupForm";
import React from "react";

const SignUp = () => {
  return (
    <>
          <section className="flex h-screen px-6 pt-4  items-center justify-center">
               <div className="justify-center  flex flex-col ">
        <div className="text-9 h-[31px] font-bold mb-8 ">Refhra</div>

        <div className="flex gap-2 items-center mb-8  text-center justify-center flex-col">
          <h1 className="font-semibold text-center text-2xl leading-9 ">
            Create a Refhra Account
          </h1>
          <p className="text-sm leading-[100%] font-normal">
            Welcome! Let&apos;s get your profile set up in just a minute.
          </p>
        </div>

        <SignupForm />
      </div>
     </section>
    </>
  );
};

export default SignUp;
