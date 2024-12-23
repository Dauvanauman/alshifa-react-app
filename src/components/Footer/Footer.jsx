import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AlShifa</h3>
          <p>Your trusted healthcare partner</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@alshifa.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: Your Address Here</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 AlShifa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
