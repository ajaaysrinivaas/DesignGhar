// pages/portfolio.tsx
import type { NextPage } from 'next';
import { useEffect } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio: NextPage = () => {
  useEffect(() => {
    gsap.from('.project', {
      opacity: 0,
      duration: 1,
      y: 20,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="portfolio-page">
      <Header />
      <main>
        <h1>Portfolio</h1>
        <p>
          Dive into a curated collection of my most inspiring projects. Each space is a canvas where creativity meets functionality.
        </p>
        <div className="gallery">
          <div className="project">
            <div className="project-image">
              <img src="/project1.jpg" alt="Modern Minimalist Residence" />
            </div>
            <div className="project-info">
              <h3>Modern Minimalist Residence</h3>
              <p>A serene space that combines simplicity with elegance.</p>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src="/project2.jpg" alt="Luxury Penthouse" />
            </div>
            <div className="project-info">
              <h3>Luxury Penthouse</h3>
              <p>Where sophistication and comfort converge in an urban oasis.</p>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src="/project3.jpg" alt="Eco-Friendly Office" />
            </div>
            <div className="project-info">
              <h3>Eco-Friendly Office</h3>
              <p>An innovative workspace designed with sustainability in mind.</p>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img src="/project4.jpg" alt="Contemporary Café" />
            </div>
            <div className="project-info">
              <h3>Contemporary Café</h3>
              <p>A vibrant setting that fuses modern art with functional design.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .portfolio-page {
          background: #fff;
          color: #4a3f35;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #555;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project {
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        .project-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project:hover .project-image img {
          transform: scale(1.05);
        }
        .project-info {
          padding: 1rem;
          text-align: left;
        }
        .project-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .project-info p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .project-info {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
