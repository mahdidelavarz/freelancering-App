import React from "react";
import SendOtpForm from "../features/authentication/SendOtpForm";
import CheckOtpForm from "../features/authentication/CheckOtpForm";

function AuthPage() {
  return (
    <section className="w-full flex justify-center pt-20">
      <div className="w-full sm:max-w-sm md:max-w-md ">
      <SendOtpForm />
      {/* <CheckOtpForm/> */}
    </div>
    </section>
  );
}

export default AuthPage;
