import React from "react";
import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );
  const { toggleProject, isUpdating } = useToggleProjectStatus();
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProject(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
        },
      }
    );
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading />
      ) : (
        <Toggle
          toggleHandler={toggleHandler}
          project={project}
          enabled={enabled}
          label={project.status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
