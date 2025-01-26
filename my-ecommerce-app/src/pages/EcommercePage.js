import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const EcommercePage = () => {
  const { cart } = useCart();
  const products = [
    // Your product data here
  ];

  return (
    <div className="ecommerce-page">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="cart-summary">
        <h2>Cart ({cart.length} items)</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
