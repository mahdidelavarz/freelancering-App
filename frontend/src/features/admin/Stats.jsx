import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

function Stats({ projects, proposals, users }) {
    // console.log(users)
  const numOfProposals = proposals?.length;
  const numOfProjects = projects?.length;
  const numOfUsers = users?.length;
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
          <h5>پروژه ها</h5>
          <p>{numOfProjects}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <div>
          <h5>کاربران</h5>
          <p>{numOfUsers}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
