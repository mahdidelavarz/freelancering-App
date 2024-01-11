import React from "react";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";
import { SiFreelancer } from "react-icons/si";
function Header() {
  const { isLoading } = useUser();
  return (
    <div className="container h-20 bg-purple-200 shadow-md shadow-purple-400 px-8 fixed top-0 right-0 left-0 flex justify-between items-center">
      <div
        className={`w-full h-full flex justify-between items-center ${
          isLoading && "blur-sm"
        }`}
      >
        <UserAvatar />
        <div className="flex justify-center items-center text-purple-900 ">
          <span className="text-xl">فریلنسر</span>
          <SiFreelancer className="text-4xl" />
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
