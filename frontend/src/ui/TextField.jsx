import React from "react";

function TextField({
  label,
  placeholder,
  register,
  validationSchema,
  name,
  type = "text",
  required,
  errors
}) {
  return (
    <div className="w-full flex flex-col items-start mt-8">
      <label className="text-lg py-2 px-2">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        className="textField__input"
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        id={name}
      />
      {errors && errors[name] && <span className="text-rose-500 block text-sm mt-2">{errors[name]?.message}</span>}
    </div>
  );
}

export default TextField;
