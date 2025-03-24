// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Branding */}
        <div className="branding">
          <img src="/logo.jpeg" alt="Logo" className="logo" />
          <div className="brand-text">
            <span className="site-name">Design Ghar</span>
            <span className="tagline">Where Interior Comes To Life</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: #222;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 10;
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
          cursor: pointer;
        }
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .site-name {
          font-size: 1.6rem;
          font-weight: bold;
          color: #fff;
          line-height: 1.2;
        }
        .tagline {
          font-size: 0.85rem;
          color: #ccc;
          margin-top: 2px;
        }
        .nav ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .nav li {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          transition: color 0.3s;
        }
        .nav li:hover {
          color: #ccc;
        }
        .nav li :global(a) {
          text-decoration: none;
          color: inherit;
          transition: color 0.3s;
        }
        .nav li :global(a):hover {
          color: #ccc;
        }
        @media (max-width: 768px) {
          .header-inner {
            flex-direction: column;
            gap: 1rem;
          }
          .nav ul {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
