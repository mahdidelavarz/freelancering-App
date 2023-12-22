import React from "react";

function ConfirmDelete({ resourceName, onConfirm , disabled , onClose}) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button onClick={onClose} className="btn btn__primary flex-1">انصراف</button>
        <button
          className="btn btn__danger flex-1"
          onClick={onConfirm}
          disabled={disabled}
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
