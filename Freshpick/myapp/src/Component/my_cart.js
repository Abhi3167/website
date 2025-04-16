import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './store/CartSlice';
import cart from './cart.png'; // Cart icon image
import './my_cart.css'; // Custom CSS for styling
import Swal from 'sweetalert2'


// or via CommonJS

const Cart = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState([]);
  const data = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  let getmodel=()=>
  {
   
    Swal.fire({
      title: "thanks for purchase",
      icon: "success",
      draggable: true
    });
  }

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  // Handle quantity increment
  const handleIncrement = (element) => {
    dispatch(incrementQuantity({ name: element.name, price: element.price }));
  };

  // Handle quantity decrement
  const handleDecrement = (element) => {
    dispatch(decrementQuantity({ name: element.name, price: element.price }));
  };

  // Handle item removal
  const handleRemove = (element) => {
    dispatch(removeFromCart({ name: element.name, price: element.price }));
  };

  return (
    <div className="cart-container">
      <div className="product-list">
        {searchData.length >= 1 ? (
          searchData.map((element) => (
            <div key={`${element.name}-${element.price}`} className="product-card">
              <img src={element.image} className="product-img" alt={element.name} />
              <div className="product-details">
                <div className="product-name">{element.name}</div>
                <div className="product-info">
                  <div>₹{element.price}</div>
                  <div>{element.weight}</div>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(element)}>-</button>
                  <span>{element.quantity}</span>
                  <button onClick={() => handleIncrement(element)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(element)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img src={cart} alt="Empty Cart" />
            <div>Your cart is empty!</div>
          </div>
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="cart-sidebar">
        <div className="sidebar-header">Cart Summary</div>
        <div className="cart-items">
          {searchData.length >= 1 && (
            <>
              <div className="total-price">Total: ₹{total}</div>
              <button className="checkout-btn" onClick={getmodel}>Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;