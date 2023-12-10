import React from "react";

function TextField({phoneNumber , onChange , label , placeholder}) {
  return (
    <div>
      <label className="text-lg py-4">{label}</label>
      <input
        onChange={onChange}
        value={phoneNumber}
        className="textField__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
