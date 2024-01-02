import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return children;
  } else {
    return <Navigate to="/welcome" />;
  }
};

export default RouteGuard;
