import useCart from "../hooks/useCart";
import ErrorBoundary from "../components/ErrorBoundary";

function CartContent() {
  const { cartItems, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Keranjang kosong 🛒</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Keranjang Belanja</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
            {item.title} - ${item.price} x {item.qty}
            <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(item.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p>Total Item: {totalItems}</p>
      <p>Total Harga: ${totalPrice.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default function CartPage() {
  return (
    <ErrorBoundary>
      <CartContent />
    </ErrorBoundary>
  );
}
