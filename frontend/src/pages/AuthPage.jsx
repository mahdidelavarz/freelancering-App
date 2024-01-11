import React, { useState } from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function AuthPage() {
  return (
    <section className="w-full h-[100vh] flex justify-center pt-20">
      <div className="lg:max-w-[50vw] w-[80vw] md:w-[65vw] h-[80vh]  bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl shadow-md shadow-purple-500 p-4 flex justify-center items-center">
        <AuthContainer />
      </div>
    </section>
  );
}

export default AuthPage;
