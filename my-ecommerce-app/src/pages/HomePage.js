import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getOffers } from '../services/productService';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offerData = await getOffers();
        setOffers(offerData);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
      }
    };

    fetchData();
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const hardcodedProducts = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://loremflickr.com/200/300' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://loremflickr.com/200/300' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://loremflickr.com/200/300' },
    { id: 4, name: 'Product 4', price: 200, image: 'https://loremflickr.com/200/300' },
    { id: 5, name: 'Product 5', price: 450, image: 'https://loremflickr.com/200/300' },
    { id: 6, name: 'Product 6', price: 360, image: 'https://loremflickr.com/200/300' },
  ];

  useEffect(() => {
    setProducts(hardcodedProducts);
  }, []);

  return (
    <div className="home-page">
      {/* Slideshow Section */}
      <div className="slideshow-container">
        {offers.map((offer) => (
          <div className="slide" key={offer.id}>
            <img 
              src={offer.image || 'https://via.placeholder.com/400x200'} 
              alt={offer.title} 
            />
            <div className="offer-details">
              <h3>{offer.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h2 className="section-heading">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={{
              ...product,
              image: product.image || 'https://via.placeholder.com/200x150',
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
