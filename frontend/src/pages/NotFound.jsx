import React from "react";
import useGetBack from "../hooks/useGetBack";

function NotFound() {
    const getBack = useGetBack();
  return (
    <div>
      <div>NotFound</div>
      <div className="text-xl">
        <button onClick={getBack}>back</button>
      </div>
    </div>
  );
}

export default NotFound;
