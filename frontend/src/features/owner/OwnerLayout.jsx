import React from 'react'
import AppLayout from '../../ui/AppLayout'
import SideBar from '../../ui/SideBar'
import { NavLink } from 'react-router-dom'

function OwnerLayout() {
  return (
    <AppLayout>
        <SideBar>
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
        </SideBar>
    </AppLayout>
  )
}

export default OwnerLayout