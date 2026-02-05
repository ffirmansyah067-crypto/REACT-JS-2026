import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import { AuthProvider } from "@/context/AuthContext";
import { ProductProvider } from "@/context/ProductContext";
import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/PrivateRoute";
import ErrorBoundary from "@/components/ErrorBoundary";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route
              path="/products"
              element={
                <ErrorBoundary>
                  <ProductsPage />
                </ErrorBoundary>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ErrorBoundary>
                  <ProductDetailPage />
                </ErrorBoundary>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
