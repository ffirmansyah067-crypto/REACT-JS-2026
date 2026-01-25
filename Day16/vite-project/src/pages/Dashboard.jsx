// src/pages/Dashboard.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav style={{ marginBottom: "10px" }}>
        <NavLink to="profile" style={{ marginRight: "10px" }}>Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <hr />
      {/* Outlet akan render nested route */}
      <Outlet />
    </div>
  );
}
