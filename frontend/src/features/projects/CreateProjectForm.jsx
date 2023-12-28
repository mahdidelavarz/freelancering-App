import React from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full text-purple-800">
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 20,
            message: "طول عنوان باید بیش از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات پروژه"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 20,
            message: "طول توضیحات باید بیش از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="bujet"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: {
            value: 10,
            message: "طول بودجه باید بیش از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn__primary w-full mt-10">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
