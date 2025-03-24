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
          <Link href="/services">
            <button>Go Back</button>
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
          <Link href="/contact" passHref>
            <button className="contact-button">Contact Us</button>
          </Link>
          <button className="close-button" onClick={() => router.push('/services')}>
            Close
          </button>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .popup-page {
          background: #fff;
          color: #4a3f35;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          padding: 2rem;
        }
        .popup-container {
          max-width: 600px;
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .popup-container h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .popup-container img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
          margin-bottom: 1rem;
          border-radius: 4px;
        }
        .popup-container p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .contact-button {
          background: #4a3f35;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          margin: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .contact-button:hover {
          background: #3a2f2a;
          transform: scale(1.05);
        }
        .close-button {
          background: transparent;
          border: 1px solid #555;
          color: #555;
          padding: 0.75rem 1.5rem;
          margin: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .close-button:hover {
          background: #eee;
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
