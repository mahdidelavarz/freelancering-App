import { useState } from "react";
import OtpInput from "react-otp-input";
const CheckOtpForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form>
        <p className="font-bold text-slate-700 p-5">کد تایید را وارد کنید</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="w-full flex flex-row-reverse gap-1 p-4 justify-center"
          inputStyle={{
            width: "2.5rem",
            borderRadius: "0.5rem",
            padding: "5px",
            outline: "none",
            border:'1px solid purple'
          }}
        />
        <button className="btn btn__primary w-full mt-4">تایید</button>
      </form>
    </div>
  );
};

export default CheckOtpForm;
