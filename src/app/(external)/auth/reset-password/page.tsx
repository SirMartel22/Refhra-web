import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import React from "react";

const ResetPassword = () => {

    
  return (
    <>
      <section className="flex h-screen min-w-full px-6 pt-4 w-full items-center justify-center">
        <div className="justify-center  flex flex-col ">
          <div className="text-9 h-[31px] font-bold mb-8 ">Refhra</div>

          <div className="flex gap-2  mb-8  text-start  flex-col">
            <h1 className="font-semibold  text-2xl leading-9 ">
              Reset Password
            </h1>
            <p className="text-sm leading-[100%] font-normal">
              Choose a new password for your account to continue{" "}
            </p>
          </div>

          <ResetPasswordForm />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
