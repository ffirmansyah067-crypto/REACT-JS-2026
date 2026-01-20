import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <h1
        style={{
          margin: "20px 40px",
          fontSize: "28px"
        }}
      >
        📦 Daftar Produk
      </h1>
      <ProductList />
    </div>
  );
}

export default Home;
