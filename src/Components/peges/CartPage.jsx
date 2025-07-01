import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    alert('Заказ оформлен! Спасибо за покупку!');
    dispatch(clearCart());
  };

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartTitle}>Ваша корзина</h1>
      
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Ваша корзина пуста</p>
          <Link to="/products" className={styles.continueShopping}>
            Вернуться к покупкам
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.price} руб.</p>
                </div>
                <div className={styles.quantityControls}>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className={styles.quantityBtn}
                  >-</button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className={styles.quantityBtn}
                  >+</button>
                </div>
                <div className={styles.itemTotal}>
                  {item.price * item.quantity} руб.
                </div>
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={styles.removeBtn}
                >×</button>
              </div>
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <h3>Итого: {calculateTotal()} руб.</h3>
            <button 
              onClick={handleCheckout} 
              className={styles.checkoutBtn}
            >
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;