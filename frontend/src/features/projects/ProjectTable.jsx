import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";

function ProjectTable() {
  const data = useOwnerProjects();
  // if (isLoading) return <Loading />;
  console.log(data);
  // if (!projects.length) return <Empty resourceName="project" />;
  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tag.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "open" ? (
                  <span>باز</span>
                ) : (
                  <span>بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default ProjectTable;
