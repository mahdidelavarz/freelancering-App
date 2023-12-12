import { useState } from "react";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
const AuthContainer = () => {
  // ! -----------------------------------------------------------states
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const { isPending, error, data:otpResponse, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  // ! -----------------------------------------------------------handlers
  const onChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            handleSendOtp={handleSendOtp}
            phoneNumber={phoneNumber}
            onChange={onChange}
            isPending={isPending}
          />
        );
        break;
      case 2:
        return (
          <CheckOtpForm
            onResendOtp={handleSendOtp}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm md:max-w-md ">{renderStep()}</div>;
};

export default AuthContainer;
