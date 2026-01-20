import React from "react";

function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    >
      <option value="All">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men’s Clothing</option>
      <option value="women's clothing">Women’s Clothing</option>
    </select>
  );
}

export default CategoryFilter;
