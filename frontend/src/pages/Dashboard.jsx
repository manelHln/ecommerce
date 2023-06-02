import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { DashboardSidebar } from "../components";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { userInfo } = useAuth();
  const isAdmin = userInfo.isAdmin

  return (
    <div>
      <DashboardSidebar />
      {isAdmin ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default Dashboard;
