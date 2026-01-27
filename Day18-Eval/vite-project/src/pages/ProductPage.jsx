import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Gagal fetch detail produk");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} style={{ width: "200px", objectFit: "contain" }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
}
