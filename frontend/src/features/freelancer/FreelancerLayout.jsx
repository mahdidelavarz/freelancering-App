import React from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { NavLink } from "react-router-dom";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/freelancer/dashboard"}
        >
          <span>داشبورد </span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/freelancer/projects"}
        >
          <span>پروژه ها </span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeItem__primary" : "sideItem__primary"
          }
          to={"/freelancer/proposals"}
        >
          <span>درخواست ها</span>
        </NavLink>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLayout;
