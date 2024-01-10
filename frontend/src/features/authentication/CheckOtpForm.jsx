import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";
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
    <div>
      <div className="w-full flex gap-x-3 justify-start items-center pb-8">
        <span>{otpResponse?.message}</span>
        <button
          className="text-2xl text-slate-500 hover:text-slate-800 duration-200"
          onClick={onBack}
        >
          <CiEdit />
        </button>
      </div>
      <div className="mt-4 w-full flex flex-row-reverse justify-between px-4">
        {time > 0 ? (
          <p className="btn bg-gray-300">{time} تا ارسال مجدد کد</p>
        ) : (
          <button className="btn bg-gray-400" onClick={onResendOtp}>
            دریافت مجدد کد تایید
          </button>
        )}
        <button
          onClick={onBack}
          className="w-9 h-9 bg-gray-400 flex justify-center items-center rounded-lg"
        >
          <HiArrowRight className="w-6 h-6 text-slate-50" />
        </button>
      </div>
      <form onSubmit={handleCheckOtp}>
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
      </form>
    </div>
  );
};

export default CheckOtpForm;
