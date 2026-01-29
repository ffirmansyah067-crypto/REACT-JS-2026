import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/settings">Settings</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
