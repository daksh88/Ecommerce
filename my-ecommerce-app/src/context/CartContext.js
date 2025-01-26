import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const placeholderImage = 'https://dummyimage.com/300x300/e0e0e0/ffffff&text=Product';

const initialProducts = [
  { 
    id: 1, 
    name: 'Product 1', 
    price: 2999, 
    image: placeholderImage
  },
  { 
    id: 2, 
    name: 'Product 2', 
    price: 3499, 
    image: placeholderImage
  },
  { 
    id: 3, 
    name: 'Product 3', 
    price: 4999, 
    image: placeholderImage
  }
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(initialProducts);

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem?.quantity === 1) {
        return prev.filter(item => item.id !== productId);
      }
      return prev.map(item =>
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
  };

  const cartTotal = getCartTotal();

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart,
      updateQuantity,
      cartTotal,
      products
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
