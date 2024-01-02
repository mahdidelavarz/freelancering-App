import React from "react";
import { LuLogOut } from "react-icons/lu";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <div>
      <LuLogOut onClick={logout} className="w-5 h-5 text-purple-800 hover:text-rose-600 duration-300 cursor-pointer" />
    </div>
  );
}

export default Logout;
