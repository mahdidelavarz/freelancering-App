import React from "react";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";

function Project() {
  const { isLoading, project } = useProject();
 console.log(project)
  if (isLoading) return <Loading />;
  return (
    <div className="dark:bg-gray-900">
      <ProjectHeader project={project} />
      <ProposalsTable Proposals={project?.proposals} />
    </div>
  );
}

export default Project;
