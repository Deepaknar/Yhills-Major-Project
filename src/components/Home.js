
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Pizza Store</h1>
        <p>Your favorite pizzas, delivered hot and fresh!</p>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1063976282/photo/chef-takes-out-a-hot-pizza-from-the-oven.jpg?s=612x612&w=0&k=20&c=8p5LDDoPWOnXWKVoZXwhOCIPaMS5pQANXy0NvolWD_k=" alt="Delicious Pizza" className="home-image" />
        </div>
      </header>
      <section className="features">
        <h2>Our Specialties</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🍕</div>
            <h3>Authentic Italian</h3>
            <p>Experience the true taste of Italy with our authentic Italian pizzas.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🥗</div>
            <h3>Fresh Ingredients</h3>
            <p>Only the freshest ingredients are used to create our mouth-watering pizzas.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <h3>Quick Delivery</h3>
            <p>Hot and fresh pizzas delivered to your doorstep in no time.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"Best pizza in town! Highly recommend."</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-item">
            <p>"Amazing taste and quick delivery. Five stars!"</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial-item">
            <p>"I can't get enough of their pizzas. Simply delicious."</p>
            <span>- Mike Johnson</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

