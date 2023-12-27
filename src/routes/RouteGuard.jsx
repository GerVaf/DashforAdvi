import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RouteGuard = ({ children }) => {
  const token = Cookies.get('token')
  if (token) return children;
  else return <Navigate to="/login" />; 
  // select-user
};

export default RouteGuard;
