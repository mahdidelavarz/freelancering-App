import React from "react";

function TextField({phoneNumber , onChange , label , placeholder}) {
  return (
    <div>
      <label className="text-lg py-2 px-2">{label}</label>
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
