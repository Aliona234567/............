import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './profileSlice';
import Navbar from '../Navbar';
import Footer from './Footer';
import './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser, isAuth } = useSelector(state => state.profile);
  const orders = useSelector(state => state.cart.orders || []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!loggedInUser || !isAuth) {
    return (
      <div className="profile-loading">
        <Navbar orders={orders} />
        <div className="loading-content">
          <h3>Загрузка профиля...</h3>
          <Link to="/" className="loading-link">В коталог</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home-wrapper">
      <Navbar orders={orders} />
      
      <div className="profile-container">
        <div className='profile-header'>
          <h1>Мой профиль</h1>
          <button className='logout-btn' onClick={handleLogout}>
            Выйти
          </button>
        </div>
        
        <div className='user-profile-card'>
          <div className='avatar-section'>
            <div className='profile-avatar'>
              {loggedInUser.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            
          </div>
          
          <div className='profile-details'>
            <div className="detail-row">
              <span className="detail-label">Имя:</span>
              <span className="detail-value">{loggedInUser.name || 'Не указано'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{loggedInUser.email || 'Не указан'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Телефон:</span>
              <span className="detail-value">{loggedInUser.phone || 'Не указан'}</span>
            </div>
            
            
          </div>
        </div>

        <div className='orders-history'>
          {loggedInUser.paidItems?.length > 0 ? (
            <div className='orders-list'>
              {loggedInUser.paidItems.map((order, index) => (
                <div key={`order-${index}`} className="order-card">
                  
                  
                </div>
              ))}
            </div>
          ) : (
            <div className="no-orders">
              <Link to="/products" className="shop-link">
                Перейти к покупкам
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;