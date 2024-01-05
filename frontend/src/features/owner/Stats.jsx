import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce((acc, curr) => {
    curr.proposals.length + acc;
  }, 0);

  return <div className="grid grid-cols-3 gap-8">
    <div className="col-span-1">
        <div className="">
            <HiOutlineViewGrid className="w-20 h-20"/>
        </div>
        <div>
            <h5>پروژه ها</h5>
            <p>{numOfProjects}</p>
        </div>
    </div>
    <div className="col-span-1">
    <div className="">
            <HiOutlineViewGrid className="w-20 h-20"/>
        </div>
        <div>
            <h5>پروژه ها</h5>
            <p>{numOfAcceptedProjects}</p>
        </div>
    </div>
    <div className="col-span-1">
    <div className="">
            <HiOutlineViewGrid className="w-20 h-20"/>
        </div>
        <div>
            <h5>پروژه ها</h5>
            <p>{numOfProposals}</p>
        </div>
    </div>
  </div>;
}

export default Stats;
