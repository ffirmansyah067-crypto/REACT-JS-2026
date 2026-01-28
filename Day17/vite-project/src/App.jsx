import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import ProductList from "./pages/ProductList"; // import halaman baru

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* route "/" diarahkan ke Home */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* route untuk product list dengan query parameters */}
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
