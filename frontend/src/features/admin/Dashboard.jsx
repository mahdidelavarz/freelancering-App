import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useAllProjects from "../projects/useAllProjects";
import useProposals from "../proposals/useProposals";
import Loading from "../../ui/Loading";
import useUsers from "../users/useUsers";

function Dashboard() {
  const { projects, isLoading: projectsLoading } = useAllProjects();
  const { proposals, isLoading: proposalLoading } = useProposals();
  const { users, isLoading: usersLoading } = useUsers();
//   console.log(users);
  if (projectsLoading || proposalLoading || usersLoading) <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} proposals={proposals} users={users} />
    </div>
  );
}

export default Dashboard;
