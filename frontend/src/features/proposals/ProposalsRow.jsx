import React from "react";

import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function ProposalRow({ proposal, index }) {
  const statusStyle = [
    {
      label: "رد شده",
      class: "bg-rose-500",
    },
    {
      label: "درانتظار تایید",
      class: "bg-gray-500 text-slate-100",
    },
    {
      label: "تایید شده",
      class: "bg-green-500",
    },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{toPersianNumbers(proposal.duration)} days</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].class}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
