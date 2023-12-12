import React, { useState } from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function AuthPage() {
  return (
    <section className="w-full h-[100vh] flex justify-center pt-20">
      <AuthContainer />
    </section>
  );
}

export default AuthPage;
