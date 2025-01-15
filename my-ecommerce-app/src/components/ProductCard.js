import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = () => {
  return (
    <div className="product-card">
      <img className="product-image" src="https://via.placeholder.com/200" alt="Product 1" />
      <h3>Product 1</h3>
      <p>Price: ₹1000</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
