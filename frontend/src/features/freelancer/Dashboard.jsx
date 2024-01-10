import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";

function Dashboard() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default Dashboard;
