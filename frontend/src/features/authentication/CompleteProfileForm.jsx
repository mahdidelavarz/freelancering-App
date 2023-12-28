import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { role: "OWNER" },
    mode: "onChange",
  });
  console.log(errors);
  const currentRoleFormFieldId = "role";
  const currentRoleDefault = getValues(currentRoleFormFieldId);
  const navigate = useNavigate();
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: completeProfile,
  });
  const handleCompleteForm = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast.success("wait for prove your information");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full max-w-lg">
      <form
        className="w-full space-y-8"
        onSubmit={handleSubmit(handleCompleteForm)}
      >
        <TextField
          label="نام و نام خانوادگی"
          register={register}
          name="name"
          required
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
          register={register}
          name="email"
          required
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است"
            }
          }}
          errors={errors}
        />
        <RadioGroup
          label="نوع فعالیت خود را انتخاب کنید :"
          defaultValue={currentRoleDefault}
          name="role"
        >
          <div className="w-full h-20 flex justify-start items-center gap-4">
            <Radio value={"FREELANCER"} {...register(currentRoleFormFieldId)}>
              <span className="mx-2">فریلنسر</span>
            </Radio>
            <Radio value={"OWNER"} {...register(currentRoleFormFieldId)}>
              <span className="mx-2">کارفرما</span>
            </Radio>
          </div>
        </RadioGroup>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn__primary w-full ">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
