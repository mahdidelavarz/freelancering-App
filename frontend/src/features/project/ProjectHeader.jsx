import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useGetBack from "../../hooks/useGetBack";
function ProjectHeader({ project }) {
  console.log(project)
  const moveBack = useGetBack();
  return (
    <div className="flex items-center gap-x-4 mb-8 p-4">
      <button onClick={moveBack}>
        <HiArrowRight className="w-5 h-5 text-gray-500" />
      </button>
      <h1 className="font-black text-gray-700 text-xl">
        لیست درخواست های  {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
