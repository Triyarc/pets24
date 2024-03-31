import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  // Check if the user is authenticated (e.g., check for the presence of the loggedIn cookie)
  const isAuthenticated = document.cookie.includes('loggedIn=true');

  useEffect(()=>{

  },[isAuthenticated])

  // If authenticated, render the children; otherwise, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
