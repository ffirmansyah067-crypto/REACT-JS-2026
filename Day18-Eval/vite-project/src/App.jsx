import { BrowserRouter as Router, Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home"; // ini daftar produk
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivateRoute from "./components/PrivateRoute";

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{ padding: "10px", background: "#eee", display: "flex", gap: "15px" }}>
      <NavLink 
        to="/products" 
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Products
      </NavLink>
      <NavLink 
        to="/cart" 
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Cart
      </NavLink>
      <NavLink 
        to="/login" 
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Login
      </NavLink>
      <span style={{ marginLeft: "auto", fontStyle: "italic" }}>
        Current: {location.pathname}
      </span>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* redirect / ke /products */}
        <Route path="/" element={<Navigate to="/products" replace />} />

        {/* daftar produk */}
        <Route path="/products" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />

        {/* cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* login */}
        <Route path="/login" element={<LoginPage />} />

        {/* checkout private */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
