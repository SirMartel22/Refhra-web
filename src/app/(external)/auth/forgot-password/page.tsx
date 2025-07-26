import ForgotPasswordFormForm from "@/components/forms/ForgotPasswordForm";
import React from "react";

const ForgotPasswordForm = () => {
  return (
    <>
      <section className="flex h-screen px-6 pt-4  items-center justify-center">
        <div className="justify-center  flex flex-col ">
          <div className="text-9 h-[31px] font-bold mb-8 ">Refhra</div>

          <div className="flex gap-2  mb-8  text-start  flex-col">
            <h1 className="font-semibold  text-2xl leading-9 ">
              Forgot Password
            </h1>
            <p className="text-sm leading-[100%] font-normal">
              Enter your email address to recieve an OTP to reset password{" "}
            </p>
          </div>

          <ForgotPasswordFormForm />
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordForm;
