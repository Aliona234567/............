import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} ₽</p>
      <button 
        onClick={() => dispatch(addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }))}
      >
        В корзину
      </button>
    </div>
  );
};