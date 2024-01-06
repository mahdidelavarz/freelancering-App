import React from "react";
import useProposals from "./useProposals";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  if (!proposals) return <Empty resourceName="proposals" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalsRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
