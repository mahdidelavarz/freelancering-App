import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div className="my-8">
      <label htmlFor={name} className="block mb-2 text-gray-700">
        {label}
        {required && <span className="text-rose-500">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
