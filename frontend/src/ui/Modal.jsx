import React, { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import useOutSideClick from "../hooks/useOutSideClick";

function Modal({ open, onClose, title, children }) {
  const modalRef = useRef();
  useOutSideClick(modalRef, onClose , true);
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-40 z-50">
        <div
          ref={modalRef}
          className="fixed w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] overflow-scroll md:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg shadow-slate-400 transition-all duration-500 ease-out "
        >
          <div className="flex items-center justify-between border-b border-b-gray-300 pb-2 mb-6">
            <p className="text-lg text-slate-700">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="icon text-slate-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
