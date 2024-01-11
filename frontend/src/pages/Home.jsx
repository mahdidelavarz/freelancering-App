import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../ui/Header";
import { FiLogIn } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoDesktopSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
function Home() {
  return (
    <div className="h-auto">
      {/* header */}
      <div className="h-20"></div>
      <div className="container h-20 fixed flex justify-between items-center px-4 bg-purple-100 shadow-md shadow-purple-300 top-0 right-0 left-0 ">
        <button className="lg:hidden">
          <CiMenuFries className="text-2xl " />
        </button>
        <div className="flex items-center gap-2 text-teal-700">
          <SiFreelancer className="text-3xl" />
          <span className="font-bold text-2xl">فریلنسر</span>
        </div>
        <ul className="justify-center items-center gap-12 text-lg hidden lg:flex ">
          <li className="flex items-center px-4 py-2 rounded-lg duration-300 gap-x-2 text-slate-700 cursor-pointer hover:bg-purple-200">
            <IoBagRemoveSharp className="text-purple-700" />
            <span>کارفرمایان</span>
          </li>
          <li className="flex items-center px-4 py-2 rounded-lg duration-300 gap-x-2 text-slate-700 cursor-pointer hover:bg-purple-200">
            <IoDesktopSharp className="text-purple-700" />
            <span>فریلنسر ها</span>
          </li>
          <li className="flex items-center px-4 py-2 rounded-lg duration-300 gap-x-2 text-slate-700 cursor-pointer hover:bg-purple-200">
            <FaProjectDiagram className="text-purple-700" />
            <span>پروژه ها</span>
          </li>
          <li className="flex items-center px-4 py-2 rounded-lg duration-300 gap-x-2 text-slate-700 cursor-pointer hover:bg-purple-200">
            <span>راهنما</span>
          </li>
        </ul>
        <NavLink to={"/auth"}>
          <div className="flex justify-between items-center gap-3">
            <button className="text-lg">ورود</button>
            <button className="px-4 py-2 bg-purple-800 text-white rounded-xl">
              ثبت نام
            </button>
          </div>
        </NavLink>
      </div>
      {/* main */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-24 p-0">
        <div className="col-span-1 flex justify-center items-center">
          <img
            className="object-cover w-[40vw]"
            src="../../public/How-to-Become-a-Freelancer-from-Scratch.png"
            alt="freelancer"
          />
        </div>
        <div className="col-span-1 flex flex-col lg:justify-center items-center gap-3 text-purple-900 ">
          <h1 className="text-2xl font-bold">
            پروژه های خود را به فریلنسر بسپارید
          </h1>
          <span className="text-lg">
            پونیشا به شما کمک می‌کند تا به راحتی با بهترین‌ها پروژه‌های خود را
            به نتیجه برسانید .
          </span>
          <NavLink to={"/auth"}>
            <button className="btn w-full btn__primary mt-8 lg:w-72">
              ایجاد سریع پروژه
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
