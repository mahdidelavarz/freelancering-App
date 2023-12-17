import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return <div className="col-span-12 row-span-1 border-b-1 ">header</div>;
}

export default Header;
