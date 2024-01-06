import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useCreateProposal } from "./useCreateProposal";
function CreateProposals({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createProposal, isCreating } = useCreateProposal();
  const onSubmit = (data) => {
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 5,
              message: "طول عنوان باید بیش از 5 کاراکتر باشد",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت پیشنهادی"
          name="price"
          register={register}
          required
          validationSchema={{
            required: "قیمت پیشنهادی ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
      <div>
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn__primary w-full mt-10">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProposals;
