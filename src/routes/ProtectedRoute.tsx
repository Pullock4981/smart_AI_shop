import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    // If not logged in, redirect to login page
    // TEMPORARY BYPASS: Commented out so you can see the Home page without logging in
    // return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes
  return <Outlet />;
};
