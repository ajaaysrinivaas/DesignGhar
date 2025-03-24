// components/Footer.tsx
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:facebook" width="28" height="28" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:twitter" width="28" height="28" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:instagram" width="28" height="28" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Design Ghar. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(255, 255, 255, 0.95); /* Translucent white */
          backdrop-filter: blur(8px); /* Blur effect */
          border-top: 2px solid rgba(34, 34, 34, 0.2);
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
          text-align: center;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social {
          margin-bottom: 0.5rem;
        }
        .social a {
          margin: 0 0.5rem;
          color: #222;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social a:hover,
        .social a:focus {
          transform: translateY(-3px);
          color: #555;
        }
        p {
          margin: 0;
          font-size: 0.95rem;
          color: #222;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
