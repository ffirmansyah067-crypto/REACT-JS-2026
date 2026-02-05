import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@/types/product";
import { useAuth } from "@/context/AuthContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return product ? (
    <div className="p-6 max-w-2xl mx-auto border rounded shadow">
      <img src={product.image} alt={product.title} className="h-60 mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
      <p className="text-green-600 font-bold text-lg mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>

      <div className="mt-6 flex gap-4">
        {isAdmin ? (
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Edit Product
          </button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default ProductDetailPage;
