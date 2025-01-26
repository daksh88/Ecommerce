import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';  // Add this import
import '../styles/HomePage.css';
import '../styles/Footer.css';  // Add this import

const placeholderOfferImage = 'https://dummyimage.com/1500x500/e0e0e0/ffffff&text=Special+Offer';
const placeholderProductImage = 'https://dummyimage.com/300x300/e0e0e0/ffffff&text=Product';

const hardcodedProducts = {
  electronics: [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 2999, 
      image: placeholderProductImage
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 3499, 
      image: placeholderProductImage
    },
    { 
      id: 3, 
      name: 'Product 3', 
      price: 200, 
      image: placeholderProductImage
    },
    { 
      id: 4, 
      name: 'Product 4', 
      price: 250, 
      image: placeholderProductImage
    },
    { 
      id: 5, 
      name: 'Product 5', 
      price: 300, 
      image: placeholderProductImage
    },
    { 
      id: 6, 
      name: 'Product 6', 
      price: 360, 
      image: placeholderProductImage
    }
  ],
  mobiles: [
    {
      id: 7,
      name: 'iPhone 13',
      price: 69999,
      image: placeholderProductImage
    },
    {
      id: 8,
      name: 'Samsung S21',
      price: 54999,
      image: placeholderProductImage
    },
    {
      id: 9,
      name: 'OnePlus 9',
      price: 49999,
      image: placeholderProductImage
    }
  ],
  groceries: [
    {
      id: 10,
      name: 'Rice (5kg)',
      price: 399,
      image: placeholderProductImage
    },
    {
      id: 11,
      name: 'Cooking Oil (1L)',
      price: 199,
      image: placeholderProductImage
    },
    {
      id: 12,
      name: 'Dal (2kg)',
      price: 299,
      image: placeholderProductImage
    }
  ]
};

const defaultOffers = [
  {
    id: 1,
    title: 'Special Offer 1',
    description: 'First offer description',
    image: placeholderOfferImage
  },
  {
    id: 2,
    title: 'Special Offer 2',
    description: 'Second offer description',
    image: placeholderOfferImage
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offers] = useState(defaultOffers);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === offers.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [offers.length]);

  return (
    <div className="home-page">
      <div className="slideshow-container">
        {offers.map((offer, index) => (
          <div 
            className="slide" 
            key={offer.id}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
            }}
          >
            <img 
              src={offer.image}
              alt={offer.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderOfferImage;
              }}
            />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="products-section">
        <h2 className="category-heading">Electronics</h2>
        <div className="product-grid">
          {hardcodedProducts.electronics.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>

        <h2 className="category-heading">Mobiles</h2>
        <div className="product-grid">
          {hardcodedProducts.mobiles.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>

        <h2 className="category-heading">Groceries</h2>
        <div className="product-grid">
          {hardcodedProducts.groceries.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <h3>Contact</h3>
          <div className="contact-details">
            <p>
              <i className="far fa-envelope"></i>
              <a href="mailto:dakshnautiyal88@gmail.com">dakshnautiyal88@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+918445603923">+91 8445603923</a>
            </p>
          </div>
          <div className="social-links">
            <a href="https://github.com/daksh88" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/dakshnautiyal1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dakshnautiyal/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
