import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="col-span-3  row-span-5  p-4 dark:bg-gray-900">
      <ul className="w-full flex flex-col gap-4 ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/owner/dashboard"}
        >
          <span>داشبورد </span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/owner/projects"}
        >
          <span>پروژه ها </span>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
