import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>Detail</button>
      </Link>
      <button style={{ marginLeft: "10px" }} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
