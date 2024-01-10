import React from "react";

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input p-2 text-xs w-60 "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="p-2">
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
