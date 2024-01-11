import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import { SiFreelancer } from "react-icons/si";
function SendOtpForm({ register, onSubmit, isPending }) {
  return (
    <div className="w-full max-w-lg h-full text-purple-800 flex justify-center  flex-col ">
      <div className="w-full flex flex-col items-center">
        <SiFreelancer className="text-6xl"/>
        <span>ورود به فریلنسر</span>
      </div>
      <form
        className="space-y-10 h-auto flex flex-col justify-between"
        onSubmit={onSubmit}
      >
        <TextField
          register={register}
          label={"شماره موبایل"}
          placeholder={"مثلا : 09120120121"}
          name="phoneNumber"
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn__primary w-full mt-4">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOtpForm;
