import React from "react";
import { HiOutlineSun } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {!isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 text-yellow-500" />
        ) : (
          <BsFillMoonStarsFill className="w-5 h-5 text-gray-200"/>
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
