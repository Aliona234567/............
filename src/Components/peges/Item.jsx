import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const Item = ({ item, onShowItem }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, ''))
      : item.price;

    dispatch(addToCart({
      id: item.id,
      title: item.title,
      price: price,
      img: item.img,
      quantity: 1 
    }));
  };

  return (
    <div className='item'>
      <img
        src={'./img/' + item.img}
        onClick={() => onShowItem(item)}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}</b>
      <button
        className='add-to-cart'
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default Item;