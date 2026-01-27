export default function ProductDetail({ product, onAddToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "200px", objectFit: "contain" }} 
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
