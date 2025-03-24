// pages/services/index.tsx
import type { NextPage } from 'next';
import { useEffect } from 'react';
import gsap from 'gsap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { services } from '../../data/servicesData';

const Services: NextPage = () => {
  useEffect(() => {
    gsap.from('.service-card', {
      opacity: 0,
      duration: 0.8,
      y: 20,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="services-page">
      <Header />
      <main>
        <h1>Our Services</h1>
        <p>
          Each service is tailored to transform your space into a work of art. Click on a service to learn more.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="service-card"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-title">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .services-page {
          background: #1c1c1c;
          color: #f0f0f0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          max-width: 1200px;
          margin: 1.5rem auto;
          padding: 0 1rem;
          text-align: center;
        }
        h1 {
          font-size: 2rem; /* Reduced from 2.8rem */
          margin-bottom: 0.8rem;
          color: #f0f0f0;
        }
        p {
          font-size: 1rem; /* Reduced from 1.1rem */
          margin-bottom: 1.5rem;
          color: #ccc;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 0 1rem;
        }
        .service-card {
          background: #2b2b2b;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          text-decoration: none !important;
          color: #f0f0f0 !important;
          display: block;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7);
        }
        .service-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-image img {
          transform: scale(1.05);
        }
        .service-title {
          padding: 0.8rem; /* Reduced padding */
          text-align: left;
        }
        .service-title h2 {
          font-size: 1.25rem; /* Reduced from 1.5rem */
          margin-bottom: 0.4rem;
          color: #f0f0f0 !important;
          text-decoration: none !important;
        }
        .service-title p {
          font-size: 0.95rem; /* Slightly smaller */
          color: #ccc !important;
          text-decoration: none !important;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-title {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
