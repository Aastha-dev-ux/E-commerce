import { Outlet , Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const username = localStorage.getItem('username') || "";
  return username.length ? <Outlet /> : <Navigate to="/login" />;
};
