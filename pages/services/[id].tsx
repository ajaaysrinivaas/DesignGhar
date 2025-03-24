// pages/services/[id].tsx
import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Example service data. In a real project, import from a data file.
const services = [
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'In-depth discussions to understand your vision and create a personalized design plan.',
    image: '/service-consultation.jpg',
    details: 'Detailed information about Consultation. Elaborate on your process, timeline, and benefits here.',
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Strategic planning to optimize your space’s functionality and aesthetic appeal.',
    image: '/service-space-planning.jpg',
    details: 'Detailed information about Space Planning. Provide more background, approach, and examples here.',
  },
  {
    id: 'bespoke-design',
    title: 'Bespoke Design',
    description: 'Custom design solutions crafted to reflect your personal style and lifestyle.',
    image: '/service-bespoke-design.jpg',
    details: 'Detailed information about Bespoke Design. Discuss your unique approach, custom materials, etc.',
  },
];

const ServicePopup: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the service by ID
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="not-found-page">
        <Header />
        <main>
          <h1>Service Not Found</h1>
          <p>We couldn’t find the service you’re looking for.</p>
          <Link legacyBehavior href="/services">
            <a>
              <button>Go Back</button>
            </a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="popup-page">
      <Header />
      <main>
        <div className="popup-container">
          <h1>{service.title}</h1>
          <img src={service.image} alt={service.title} />
          <p>{service.details}</p>
          <Link legacyBehavior href="/contact">
            <a>
              <button className="contact-button">Contact Us</button>
            </a>
          </Link>
          <button className="close-button" onClick={() => router.push('/services')}>
            Close
          </button>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .popup-page {
          background: #1c1c1c;
          color: #f0f0f0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
        }
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          flex: 1;
        }
        .popup-container {
          max-width: 550px;
          background: #2b2b2b;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          text-align: center;
        }
        .popup-container h1 {
          font-size: 1.75rem; /* Reduced font size */
          margin-bottom: 0.8rem;
          color: #f0f0f0;
        }
        .popup-container img {
          width: 100%;
          max-width: 350px;
          height: auto;
          object-fit: cover;
          margin: 0.8rem auto;
          border-radius: 4px;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
        }
        .popup-container p {
          font-size: 1rem; /* Reduced font size */
          color: #ccc;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .contact-button {
          background: #f0f0f0;
          color: #1c1c1c;
          border: none;
          padding: 0.65rem 1.3rem;
          margin: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          font-size: 0.95rem;
        }
        .contact-button:hover {
          background: #e0e0e0;
          transform: scale(1.05);
        }
        .close-button {
          background: transparent;
          border: 1px solid #ccc;
          color: #ccc;
          padding: 0.65rem 1.3rem;
          margin: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          font-size: 0.95rem;
        }
        .close-button:hover {
          background: #333;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .popup-container {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicePopup;
