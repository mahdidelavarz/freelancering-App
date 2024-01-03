import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/LogOut";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-6 items-center dark:bg-gray-900">
      <li>
        <Link to={"dashboard"}>
          <HiOutlineUser className="w-5 h-5 text-purple-800" />
        </Link>
      </li>
      <li className="mt-2">
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
