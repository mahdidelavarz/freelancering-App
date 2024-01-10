import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { NavLink } from "react-router-dom";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/admin/dashboard"}
        >
          <span>داشبورد </span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/admin/projects"}
        >
          <span>پروژه ها </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/admin/users"}
        >
          <span>کاربران</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/admin/proposals"}
        >
          <span>درخواست ها</span>
        </NavLink>
      </SideBar>
    </AppLayout>
  );
}

export default AdminLayout;
