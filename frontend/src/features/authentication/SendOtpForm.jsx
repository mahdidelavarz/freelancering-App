import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast"
function SendOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const onChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
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
        <button type="submit" className="btn btn__primary w-full mt-4">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
