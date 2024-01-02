import React, { useState } from "react";
import {Link} from "react-router-dom"
import Table from "./Table";
import truncateText from "../utils/truncateText";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import toLocalDate from "../utils/toLocalDate";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import useRemoveProject from "../features/projects/useRemoveProject";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import ToggleProjectStatus from "../features/projects/ToggleProjectStatus";

function TableRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isPendingDelete, removeProject } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags?.map((tag) => (
            <span key={tag} className="badge badge__secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project}/>
      </td>
      <td className="flex gap-x-4 items-center mt-6">
        <button onClick={() => setIsEditOpen(true)}>
          <TbPencilMinus className="icon text-purple-900" />
        </button>
        <Modal
          open={isEditOpen}
          title={`ویرایش ${project.title}`}
          onClose={() => setIsEditOpen(false)}
        >
          <CreateProjectForm
            projectToEdit={project}
            onClose={() => setIsEditOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className="icon text-rose-500 " />
        </button>
        <Modal
          open={isDeleteOpen}
          title={`حذف ${project.title}`}
          onClose={() => setIsDeleteOpen(false)}
        >
          <ConfirmDelete
            resourceName={project.title}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              removeProject(project._id, {
                onSuccess: () => setIsDeleteOpen(false),
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
      <td>
       <Link to={project._id}>
        <HiEye className="w-5 h-5 text-purple-800 "/>
       </Link>
      </td>
    </Table.Row>
  );
}

export default TableRow;
