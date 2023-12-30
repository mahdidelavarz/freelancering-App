import React, { useState } from "react";
import ProjectTable from "../features/projects/ProjectTable";
import Modal from "../ui/Modal";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import CreateProjectForm from "../features/projects/CreateProjectForm";

function Projects() {
  const [isAddProjectOpen, setIsAddProject] = useState(false);
  return (
    <div>
      <div className="w-full h-24 px-20 mb-4 flex justify-between items-center border-b">
        <h4 className="text-2xl">پروژه های شما</h4>
        <button
          onClick={() => setIsAddProject(true)}
          className="btn btn__primary"
        >
          افزودن پروژه
        </button>
        <Modal
          open={isAddProjectOpen}
          title="اضافه کردن پروژه جدید"
          onClose={() => setIsAddProject(false)}
        >
          <CreateProjectForm onClose={() => setIsAddProject(false)} />
        </Modal>
      </div>
      <ProjectTable />
    </div>
  );
}

export default Projects;
