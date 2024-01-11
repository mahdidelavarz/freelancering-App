import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
import { SiFreelancer } from "react-icons/si";
import { IoReturnDownBack } from "react-icons/io5";
const RESEND_TIME = 90;
const CheckOtpForm = ({
  phoneNumber,
  onBack,
  onResendOtp,
  message,
  otpResponse,
}) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) return navigate("/");
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="max-w-lg">
      <div className="w-full flex flex-col items-center text-purple-800">
        <SiFreelancer className="text-6xl" />
        <span className="text-lg">ورود به فریلنسر</span>
      </div>
      <div className="w-full flex gap-x-3 justify-start items-center h-20 text-purple-900 mt-2 ">
        <span>{otpResponse?.message}</span>
        <button
          className="text-2xl text-slate-500 hover:text-slate-800 duration-200"
          onClick={onBack}
        >
          <CiEdit />
        </button>
      </div>
      <form className=" flex flex-col gap-6" onSubmit={handleCheckOtp}>
        <p className="font-bold tex-xl text-purple-800 p-5">
          کد تایید را وارد کنید
        </p>
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
            border: "1px solid purple",
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn__primary w-full mt-4">
            تایید
          </button>
        )}
        <div className="mt-4 w-full flex flex-row-reverse justify-between px-4 ">
          {time > 0 ? (
            <p className=" bg-purple-50 text-slate-500 py-2 px-4 rounded-md border border-purple-500">
              {time} تا ارسال مجدد کد
            </p>
          ) : (
            <button
              className=" bg-white text-slate-800 py-2 px-4 rounded-md border border-purple-500 "
              onClick={onResendOtp}
            >
              دریافت مجدد کد تایید
            </button>
          )}
          <button
            onClick={onBack}
            className="px-3 bg-white flex justify-center items-center rounded-lg text-slate-700"
          >
            <IoReturnDownBack className="text-4xl text-purple-700"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOtpForm;
