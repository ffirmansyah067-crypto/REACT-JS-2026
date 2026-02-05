import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useProductsContext } from "@/context/ProductContext";

const ProductsPage = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [setProducts]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
  <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
    Product Catalog
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</div>

    
  );
};

export default ProductsPage;
