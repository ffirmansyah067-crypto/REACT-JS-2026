import React from "react";
import { useTheme } from "../hooks/useTheme";

function ProductCard({ product, onAddToCart }) {
  const { theme } = useTheme();

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  };

  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "180px", objectFit: "contain" }}
      />

      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
        {product.title}
      </h3>

      <p style={{ fontWeight: "bold", color: theme === "light" ? "#0a0" : "#6f6" }}>
        ${product.price}
      </p>

      <button
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer"
        }}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
