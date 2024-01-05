import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";

function Dashboard() {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default Dashboard;
