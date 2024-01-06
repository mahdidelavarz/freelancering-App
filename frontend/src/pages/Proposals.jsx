import React from "react";
import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-slate-700 text-xl mb-8">
        درخواست های شما
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
