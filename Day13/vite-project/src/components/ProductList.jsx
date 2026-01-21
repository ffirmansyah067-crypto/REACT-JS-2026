import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div>
      <h2>Daftar Produk</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
