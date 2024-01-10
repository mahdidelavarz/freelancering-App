import React from "react";
import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-black text-slate-700 text-xl mb-8">کاربر های شما</h1>
      <UsersTable />
    </div>
  );
}

export default Users;
