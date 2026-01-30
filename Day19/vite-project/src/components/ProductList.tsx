import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelect = (product: Product): void => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => handleSelect(p)}>Select</button>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #aaa" }}>
          <h3>Selected Product</h3>
          <p>{selectedProduct.name}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Tags: {selectedProduct.tags.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
