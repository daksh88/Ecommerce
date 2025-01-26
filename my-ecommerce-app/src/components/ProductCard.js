import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart } = useCart();

  const handleInitialAdd = () => {
    setIsAdded(true);
    setQuantity(1);
    addToCart(product);
  };

  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity(prev => prev + 1);
      addToCart(product);
    } else if (quantity > 0) {
      setQuantity(prev => prev - 1);
      removeFromCart(product.id);
      if (quantity === 1) {
        setIsAdded(false);
      }
    }
  };

  return (
    <div className="product-card">
      <img 
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = process.env.PUBLIC_URL + '/assets/image1.jpg';
        }}
      />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toLocaleString()}</p>
      
      {!isAdded ? (
        <button className="add-to-cart-btn" onClick={handleInitialAdd}>
          Add to Cart
        </button>
      ) : (
        <div className="quantity-controls">
          <button className="quantity-btn minus" onClick={() => handleQuantityChange(false)}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn plus" onClick={() => handleQuantityChange(true)}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
