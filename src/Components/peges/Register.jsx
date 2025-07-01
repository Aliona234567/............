// Register.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from './profileSlice';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profiles } = useSelector(state => state.profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setFormError("Заполните все поля");
      return;
    }
    
    const existingUser = profiles.find(user => user.email === email);
    if (existingUser) {
      setFormError("Пользователь с таким email уже существует");
      return;
    }

    dispatch(register({ name, email, password }));
    navigate("/profile");
  };

  return (
    <div className='auth-container'>
      <h2>Регистрация</h2>
      {formError && <p className="error">{formError}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className="auth-btn">Зарегистрироваться</button>
      </form>
      <p className="auth-link">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default Register;