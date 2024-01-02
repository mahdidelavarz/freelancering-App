import React, { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
function ProposalRow({ proposal, index }) {
  const statusStyle = [
    {
      label: "رد شده",
      class: "bg-rose-500",
    },
    {
      label: "درانتظار تایید",
      class: "bg-gray-500",
    },
    {
      label: "تایید شده",
      class: "bg-green-500",
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].class}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست "
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
