import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDate from "../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(projects , '.................')
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="project" />;
  return (
    <div className="w-full px-4 overflow-x-auto">
      <table className="w-full">
        <thead className="w-full">
          <tr className="title-row">
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
        <tbody className="w-full">
          {projects.map((project, index) => (
            <tr key={project._id} className="">
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDate(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="badge badge__secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge__success">باز</span>
                ) : (
                  <span className="badge badge__danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
