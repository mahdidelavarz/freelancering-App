import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
function CreateProjectForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
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
            value: 10,
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
            value: 10,
            message: "طول توضیحات باید بیش از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
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
      <div>
        <RHFSelect
          label="دسته بندی"
          name="category"
          register={register}
          options={categories}
        />
      </div>
      <div>
        <label className="mb-2 block text-slate-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField
        date={date}
        setDate={setDate}
        label="تاریخ اعتبار پروژه"
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

export default CreateProjectForm;
