// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Navigation Menu Demo</h1>

        {/* Navigation Menu */}
        <nav style={{ marginBottom: "20px" }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              marginRight: "10px",
              textDecoration: "none",
              color: isActive ? "red" : "blue",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              marginRight: "10px",
              textDecoration: "none",
              color: isActive ? "red" : "blue",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "red" : "blue",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact
          </NavLink>
          
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              marginLeft: "10px",
              textDecoration: "none",
              color: isActive ? "red" : "blue",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Products
          </NavLink>

          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              marginLeft: "10px",
              textDecoration: "none",
              color: isActive ? "red" : "blue",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
