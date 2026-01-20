import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import CartBadge from "./CartBadge";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const { cartState, dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat data produk");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      category === "All" ? true : product.category.toLowerCase() === category.toLowerCase();
    return matchSearch && matchCategory;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Gagal memuat data: {error}</p>;

  return (
  <div
    style={{
      width: "100%",
      padding: "20px 40px",
      boxSizing: "border-box"
    }}
  >
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <CategoryFilter category={category} setCategory={setCategory} />
    <CartBadge count={cartState.items.length} />

    {filteredProducts.length === 0 ? (
      <p>Produk tidak ditemukan.</p>
    ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
          width: "100%"
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    )}
  </div>
);
}

export default ProductList;
