// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Branding */}
        <div className="branding">
          <Link legacyBehavior href="/">
            <a className="branding-link" aria-label="Go to homepage">
              <img src="/logo.jpeg" alt="Design Ghar Logo" className="logo" />
              <div className="brand-text">
                <span className="site-name">Design Ghar</span>
                <span className="tagline">Where Interior Comes To Life</span>
              </div>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link legacyBehavior href="/">
                <a onClick={() => setMobileMenuOpen(false)}>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a onClick={() => setMobileMenuOpen(false)}>About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/portfolio">
                <a onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/services">
                <a onClick={() => setMobileMenuOpen(false)}>Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.95); /* Translucent white */
          backdrop-filter: blur(8px); /* Subtle blur effect */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          z-index: 1000;
          border-bottom: 2px solid rgba(34, 34, 34, 0.2); /* Subtle dark accent border */
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .branding {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .branding-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        .branding-link:hover .logo {
          transform: scale(1.05);
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .site-name {
          font-size: 1.6rem;
          font-weight: bold;
          color: #222;
          line-height: 1.2;
        }
        .tagline {
          font-size: 0.85rem;
          color: #555;
          margin-top: 2px;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #222;
          cursor: pointer;
        }
        .nav ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .nav li a {
          font-size: 1rem;
          color: #222;
          text-decoration: none;
          transition: color 0.3s ease, border-bottom 0.3s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }
        .nav li a:hover,
        .nav li a:focus {
          color: #555;
          border-bottom-color: #555;
          outline: none;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, opacity 0.3s ease;
            border-bottom: 2px solid rgba(34, 34, 34, 0.2);
            opacity: 0;
          }
          .nav.open {
            max-height: 300px;
            opacity: 1;
          }
          .nav ul {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
