import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

function Stats({ proposals }) {
  const numOfProposals = proposals?.length;
  const acceptedProposals = proposals?.filter((p) => p.status === 2).length;
  const balance = acceptedProposals?.reduce((acc, curr) => {
    acc + curr.price;
  }, 0);
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <div className="">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <div>
          <h5>درخواست ها</h5>
          <p>{numOfProposals}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <div>
          <h5>درخواست های تایید شده</h5>
          <p>{acceptedProposals?.length}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <div>
          <h5>کیف پول</h5>
          <p>{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
