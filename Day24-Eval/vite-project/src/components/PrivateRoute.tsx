import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
