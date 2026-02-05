import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { isAdmin, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🛍️ E-Commerce Lite
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:underline ${isActive ? "font-bold" : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:underline ${isActive ? "font-bold" : ""}`
            }
          >
            Login
          </NavLink>
          {isAdmin && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-bold" : ""}`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg shadow hover:opacity-80 transition"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Logout */}
          {isAdmin && (
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
