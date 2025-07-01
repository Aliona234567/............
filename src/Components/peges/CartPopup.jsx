import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, toggleCart, clearCart } from './cartSlice';
import { Link } from 'react-router-dom';

const CartPopup = () => {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector(state => state.cart);
  const { isAuth } = useSelector(state => state.profile);

  if (!isCartOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  const handleCheckout = () => {
    if (!isAuth) {
      alert("Для оформления заказа необходимо войти в систему");
      return;
    }
    if (items.length === 0) {
      alert("Ваша корзина пуста");
      return;
    }
    alert(`Заказ на сумму ${total}₽ оформлен!`);
    dispatch(clearCart());
  };

  return (
    <div className="cart-popup-overlay" onClick={() => dispatch(toggleCart())}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Ваша корзина</h3>
          <button className="close-btn" onClick={() => dispatch(toggleCart())}>
            ×
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Корзина пуста</h2>
            <p>Добавьте товары из каталога</p>
            <Link to="/products" onClick={() => dispatch(toggleCart())}>
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={`./img/${item.img}`} alt={item.title} />
                  <div className="item-info">
                    <h4>{item.title}</h4>
                    <div className="quantity-controls">
                      <button onClick={() => 
                        dispatch(updateQuantity({
                          id: item.id,
                          quantity: Math.max(1, item.quantity - 1)
                        }))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => 
                        dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1
                        }))}
                      >
                        +
                      </button>
                    </div>
                    <p>{item.price}₽ × {item.quantity} = {(item.price * item.quantity).toFixed(2)}₽</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="total">
                Итого: <span>{total}₽</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;