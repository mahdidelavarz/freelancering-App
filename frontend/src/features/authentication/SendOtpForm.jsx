import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
function SendOtpForm({ phoneNumber, handleSendOtp, onChange , isPending }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={handleSendOtp}>
        <TextField
          phoneNumber={phoneNumber}
          onChange={onChange}
          label={"شماره موبایل"}
          placeholder={"*********09"}
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
