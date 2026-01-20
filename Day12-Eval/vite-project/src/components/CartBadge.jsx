import React from "react";

function CartBadge({ count }) {
  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#007bff",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "20px"
    }}>
      🛍️ Cart: {count}
    </div>
  );
}

export default CartBadge;
