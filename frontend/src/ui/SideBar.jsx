import React from "react";

function SideBar({children}) {
  return (
    <div className="col-span-3  row-span-5  p-4 dark:bg-gray-900">
      <ul className="w-full flex flex-col gap-4 ">
        {children}
      </ul>
    </div>
  );
}

export default SideBar;
