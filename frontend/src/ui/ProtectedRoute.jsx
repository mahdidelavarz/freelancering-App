import React, { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) navigate("/not-access");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading, navigate , isVerified]);
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if ((isAuthenticated, isAuthorized)) {
    return children;
  }
}

export default ProtectedRoute;
