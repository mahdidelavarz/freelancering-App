import React from "react";
import useUser from "../features/authentication/useUser";

function UserAvatar() {
  const { isLoading, user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-slate-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="user"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
