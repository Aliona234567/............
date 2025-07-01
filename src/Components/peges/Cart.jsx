import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Подсчет общей суммы
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ 
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  return (
    <div className="cart-container">
      <button 
        className="cart-toggle"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        Корзина ({cartItems.reduce((total, item) => total + item.quantity, 0)})
      </button>

      {isCartOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Ваша корзина</h3>
            <button 
              className="close-cart"
              onClick={() => setIsCartOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Ваша корзина пуста</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price} ₽</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Итого:</span>
                <span>{total} ₽</span>
              </div>
              <button className="checkout-btn">
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;