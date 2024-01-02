import React from "react";
import { HiOutlineSun } from "react-icons/hi";

function DarkModeToggle() {
  return (
    <div>
      <button>
        <HiOutlineSun className="w-5 h-5 text-yellow-500"/>
      </button>
    </div>
  );
}

export default DarkModeToggle;
