import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
function AppLayout() {
  return (
    <div className="w-full min-h-screen grid grid-rows-6 grid-cols-12 gap-2 dark:bg-gray-900">
      <Header />
      <SideBar />
      <div className=" row-span-5 col-span-9 rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
