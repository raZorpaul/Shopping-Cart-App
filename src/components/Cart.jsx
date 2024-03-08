import React from "react";
import { useCart } from "./context/CartContext";
import "../styles/Cart.css";

function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // Function to calculate subtotal for each item
  const calculateSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // Function to calculate total cart subtotal
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Cart</h2>
        <div className="cart-items-container">
          <ul className="cart-items">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.title}</div>
                    <div className="cart-item-price">${item.price}</div>
                    <div className="cart-item-quantity">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <div className="cart-item-subtotal">
                      Subtotal: ${calculateSubtotal(item)}
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-total">Total: ${calculateTotal()}</div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
