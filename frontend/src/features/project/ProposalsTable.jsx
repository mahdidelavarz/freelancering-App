import React from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table"
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals) return <Empty resourceName="درخواستی وجود ندارد"/>;
  return <div>
<Table>
<Table.Header>
  <th>#</th>
  <th>فریلنسر</th>
  <th>توضیحات</th>
  <th>زمان تحویل</th>
  <th>هزینه</th>
  <th>وضعیت</th>
  <th>عملیات</th>
</Table.Header>
<Table.Body>
  {proposals.map((proposal) => (
    <ProposalRow key={proposal._id} proposal={proposal}/>
  ))}
</Table.Body>
</Table>
  </div>;
}

export default ProposalsTable;
