import React from "react";
import { useCart } from "../context/CartContext";

const CartDisplay = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCart();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
