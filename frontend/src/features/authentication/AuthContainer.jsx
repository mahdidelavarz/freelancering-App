import { useState } from "react";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const AuthContainer = () => {
  // ! -----------------------------------------------------------states
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);

  const {
    isPending,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  // ! -----------------------------------------------------------handlers
  const handleSendOtp = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
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
            register={register}
            onSubmit={handleSubmit(handleSendOtp)}
            isPending={isPending}
          />
        );
        break;
      case 2:
        return (
          <CheckOtpForm
            onResendOtp={handleSubmit(handleSendOtp)}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-full h-[90%] flex justify-center">{renderStep()}</div>
  );
};

export default AuthContainer;
