import React, { useState } from "react";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDate from "../../../utils/toLocalDate";
import Table from "../../../ui/Table";
// import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposals from "../../proposals/CreateProposals";
function ProjectRow({ project, index }) {
  const statusStyle = {
    OPEN: { label: "رد شده", class: "bg-rose-500" },
    CLOSED: { label: "تایید شده", class: "bg-green-500" },
  };
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <span className={`badge ${statusStyle[project.status].class}`}>
          {statusStyle[project.status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          {/* <MdAssignmentAdd className="w-5 h-5 text-purple-800 " /> */}
          <span>noteicon</span>
        </button>
        <Modal
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${project.title}`}
          open={open}
        >
          <CreateProposals
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
