import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: NextPage = () => {
  useEffect(() => {
    // Animate each project on scroll, similar to the About page
    const projects = gsap.utils.toArray('.project') as HTMLElement[];
    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      });
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
          <Link href="/portfolio/modern-minimalist-residence" legacyBehavior>
            <a className="project">
              <div className="project-image">
                <img src="/Project1.jpg" alt="Modern Minimalist Residence" />
                <div className="image-overlay" />
              </div>
              <div className="project-info">
                <h3>Modern Minimalist Residence</h3>
                <p>A serene space that combines simplicity with elegance.</p>
              </div>
            </a>
          </Link>
          <Link href="/portfolio/luxury-penthouse" legacyBehavior>
            <a className="project">
              <div className="project-image">
                <img src="/Project2.jpg" alt="Luxury Penthouse" />
                <div className="image-overlay" />
              </div>
              <div className="project-info">
                <h3>Luxury Penthouse</h3>
                <p>Where sophistication and comfort converge in an urban oasis.</p>
              </div>
            </a>
          </Link>
          <Link href="/portfolio/eco-friendly-office" legacyBehavior>
            <a className="project">
              <div className="project-image">
                <img src="/Project3.jpg" alt="Eco-Friendly Office" />
                <div className="image-overlay" />
              </div>
              <div className="project-info">
                <h3>Eco-Friendly Office</h3>
                <p>An innovative workspace designed with sustainability in mind.</p>
              </div>
            </a>
          </Link>
          <Link href="/portfolio/contemporary-cafe" legacyBehavior>
            <a className="project">
              <div className="project-image">
                <img src="/Project4.jpg" alt="Contemporary Café" />
                <div className="image-overlay" />
              </div>
              <div className="project-info">
                <h3>Contemporary Café</h3>
                <p>A vibrant setting that fuses modern art with functional design.</p>
              </div>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .portfolio-page {
          background: #1c1c1c;
          color: #f0f0f0;
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
          font-size: 2rem;
          margin-bottom: 0.8rem;
        }
        p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          color: #ccc;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .project {
          background: linear-gradient(135deg, #2b2b2b, #242424);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .project:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
        }
        .project-image {
          position: relative;
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
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
          pointer-events: none;
          opacity: 0.8;
        }
        .project-info {
          padding: 0.8rem;
          text-align: left;
          flex: 1;
        }
        .project-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.4rem;
          color: #f0f0f0;
        }
        .project-info p {
          font-size: 0.95rem;
          color: #ccc;
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
