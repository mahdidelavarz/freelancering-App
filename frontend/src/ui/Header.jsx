import React from "react";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="col-span-12 row-span-1 border-b-1 bg-white py-4 px-8 ">
      <div className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${isLoading && "blur-sm" }`}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
