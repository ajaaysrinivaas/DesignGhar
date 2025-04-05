import React, { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Example service data. In a real project, import from a data file.
const services = [
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'In-depth discussions to understand your vision and create a personalized design plan.',
    image: '/consultation.jpg',
    details:
      'Our consultation lays the groundwork for a successful project by identifying your design goals, budget, and style preferences.',
    explanation:
      'Our Consultation service is the crucial first step in your design journey. We begin with a one-on-one discussion to understand your lifestyle, aspirations, and the unique characteristics of your space. Through in-depth conversations and on-site evaluations, we craft a personalized design roadmap that outlines the possibilities and sets clear expectations for timelines and budgets.',
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Strategic planning to optimize your space’s functionality and aesthetic appeal.',
    image: '/space.jpg',
    details:
      'We evaluate the layout and flow of your space, ensuring that every square foot is used to its maximum potential.',
    explanation:
      'Our Space Planning service is dedicated to transforming your space into a harmonious blend of function and beauty. We analyze the existing layout, paying close attention to natural light, traffic flow, and areas of underutilization. By rethinking spatial arrangements and incorporating innovative design solutions, we create a plan that enhances usability while elevating the overall aesthetic.',
  },
  {
    id: 'bespoke-design',
    title: 'Bespoke Design',
    description: 'Custom design solutions crafted to reflect your personal style and lifestyle.',
    image: '/bespoke.jpg',
    details:
      'Every element is curated to your specifications, resulting in a space that is uniquely yours.',
    explanation:
      'Our Bespoke Design service offers a fully customized design experience where every detail is carefully curated to mirror your personality and lifestyle. We collaborate closely with you to select custom materials, color palettes, furniture, and finishes that align with your vision. From initial sketches to final installation, our team ensures that every aspect of your space is executed with precision and creativity.',
  },
];

const ServicePopup: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const popupRef = useRef<HTMLDivElement>(null);

  // Find the service by ID
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    // Animate the popup container on mount
    if (popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.9, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

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
        <style jsx>{`
          .not-found-page {
            background: #1c1c1c;
            color: #f0f0f0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.5rem;
            flex: 1;
            text-align: center;
          }
          button {
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
          button:hover {
            background: #e0e0e0;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="popup-page">
      <Header />
      <main>
        <div className="popup-container" ref={popupRef}>
          <h1>{service.title}</h1>
          <div className="content-wrapper">
            <div className="image-column">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="text-column">
              <p className="explanation">{service.explanation}</p>
              <p className="details">{service.details}</p>
            </div>
          </div>
          <div className="button-row">
            <Link legacyBehavior href="/contact">
              <a>
                <button className="contact-button">Contact Us</button>
              </a>
            </Link>
            <button className="close-button" onClick={() => router.push('/services')}>
              Close
            </button>
          </div>
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
          max-width: 800px;
          background: #2b2b2b;
          padding: 2rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          text-align: left;
          transform-origin: center;
        }
        .popup-container h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #f0f0f0;
        }
        .content-wrapper {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        .image-column {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-column img {
          width: 100%;
          max-width: 350px;
          height: auto;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
        }
        .text-column {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .explanation,
        .details {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .button-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .contact-button {
          background: #f0f0f0;
          color: #1c1c1c;
          border: none;
          padding: 0.75rem 1.5rem;
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
          padding: 0.75rem 1.5rem;
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
          .content-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .text-column {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicePopup;
