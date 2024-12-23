import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to AlShifa</h1>
        <p>Your trusted partner in healthcare solutions</p>
      </section>
      
      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>We offer high-quality healthcare products</p>
          </div>
          <div className="feature-card">
            <h3>Expert Support</h3>
            <p>24/7 customer support available</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery service</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
