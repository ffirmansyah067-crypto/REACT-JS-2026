import useCart from "../hooks/useCart";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong, tidak bisa checkout.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.qty}
              </li>
            ))}
          </ul>
          <p>Total Harga: ${totalPrice.toFixed(2)}</p>
          <button>Confirm Checkout</button>
        </>
      )}
    </div>
  );
}
