// pages/index.tsx
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonialsData = [
  { name: 'Rahul Sharma', text: 'The designs truly reflect sophistication and comfort. I feel at home.' },
  { name: 'Priya Singh', text: 'An inspiring blend of modern elegance and warm tradition.' },
  { name: 'Amit Patel', text: 'Every space feels personal and thoughtfully curated for my taste.' },
  { name: 'Neha Gupta', text: 'The interior designs are innovative and make every corner inviting.' },
];

const Home: NextPage = () => {
  // Refs for GSAP animations and canvas
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Allow null as initial value so TypeScript doesn't complain
  const animationFrameId = useRef<number | null>(null);

  // Testimonial state for slider
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Animate hero content on load
  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, { duration: 1, opacity: 0, y: -50 });
    }
    gsap.from(projectRefs.current, { duration: 1, opacity: 0, y: 30, stagger: 0.2 });
  }, []);

  // Register project cards for GSAP animation
  const addProjectRef = (el: HTMLDivElement) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  // Canvas animation: abstract moving lines (black and white)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 0.6); // use 60% of viewport height for hero

    // Create a set of line objects with random properties
    const lines: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
    }[] = [];

    const numLines = 50;
    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 50 + Math.random() * 100,
        speed: 0.2 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop: clear canvas and redraw each line with slight movement
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 2;
      lines.forEach((line) => {
        // Update line position
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;
        // Wrap around the canvas boundaries
        if (line.x > width) line.x = 0;
        if (line.x < 0) line.x = width;
        if (line.y > height) line.y = 0;
        if (line.y < 0) line.y = height;
        // Draw line
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
      });
      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    // Update canvas size on window resize
    const handleResize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight * 0.6);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Testimonial slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        {/* HERO SECTION WITH LIGHER CANVAS AND GRADIENT OVERLAY */}
        <section className="hero-section">
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="gradient-overlay" />
          <div ref={heroRef} className="hero-content">
            <img src="/logo.jpeg" alt="Design Ghar Logo" className="logo" />
            <h1>Design Ghar</h1>
            <p className="tagline">Where Modern Elegance Meets Timeless Comfort</p>
            <button className="cta-button">Explore Our Work</button>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card" ref={addProjectRef}>
              <div className="project-image" style={{ backgroundImage: 'url(/project1.jpg)' }}></div>
              <div className="project-info">
                <h3>Urban Monochrome</h3>
                <p>A sleek city abode blending dark accents with pristine white finishes.</p>
              </div>
            </div>
            <div className="project-card" ref={addProjectRef}>
              <div className="project-image" style={{ backgroundImage: 'url(/project2.jpg)' }}></div>
              <div className="project-info">
                <h3>Minimalist Haven</h3>
                <p>Clean lines, airy layouts, and soft neutral tones for peaceful living.</p>
              </div>
            </div>
            <div className="project-card" ref={addProjectRef}>
              <div className="project-image" style={{ backgroundImage: 'url(/project3.jpg)' }}></div>
              <div className="project-info">
                <h3>Rustic Modern Blend</h3>
                <p>Where reclaimed wood meets contemporary touches in a cozy retreat.</p>
              </div>
            </div>
            <div className="project-card" ref={addProjectRef}>
              <div className="project-image" style={{ backgroundImage: 'url(/project4.jpg)' }}></div>
              <div className="project-info">
                <h3>Scandinavian Chic</h3>
                <p>Light palettes, functional furnishings, and an inviting Nordic charm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-slider">
            <p className="testimonial-text">
              "{testimonialsData[testimonialIndex].text}"
            </p>
            <p className="testimonial-name">{testimonialsData[testimonialIndex].name}</p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* Container & Global Styles */
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #fff;
          color: #222;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          flex: 1;
          overflow: hidden;
        }

        /* HERO SECTION */
        .hero-section {
          position: relative;
          height: 60vh;
          overflow: hidden;
        }
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f9f9f9;
          z-index: 0;
        }
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
        }
        .hero-content {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          top: 50%;
          transform: translateY(-50%);
        }
        .logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          margin: 0 auto 1rem;
        }
        .hero-content h1 {
          font-size: 2rem;
          margin: 0.5rem 0 1rem;
          color: #222;
        }
        .tagline {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #444;
        }
        .cta-button {
          background: #222;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .cta-button:hover {
          background: #444;
          transform: scale(1.05);
        }

        /* FEATURED PROJECTS SECTION */
        .featured-projects {
          padding: 3rem 2rem;
          background-color: #fff;
        }
        .featured-projects h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .project-card {
          background-color: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .project-image {
          height: 160px;
          background-size: cover;
          background-position: center;
        }
        .project-info {
          padding: 1rem;
        }
        .project-info h3 {
          margin-top: 0;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #222;
        }
        .project-info p {
          font-size: 0.95rem;
          color: #555;
        }

        /* TESTIMONIALS SECTION */
        .testimonials {
          position: relative;
          padding: 3rem 2rem;
          background-color: #f7f7f7;
          text-align: center;
        }
        /* Pseudo-element for subtle section separation */
        .testimonials::before {
          content: "";
          position: absolute;
          top: -25px;
          left: 0;
          width: 100%;
          height: 50px;
          background: #f7f7f7;
          transform: skewY(-3deg);
          transform-origin: top left;
          z-index: -1;
        }
        .testimonials h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .testimonial-slider {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          font-size: 1.1rem;
          color: #444;
        }
        .testimonial-text {
          font-style: italic;
          margin-bottom: 1rem;
        }
        .testimonial-name {
          font-weight: bold;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .hero-section {
            height: 50vh;
          }
          .hero-content {
            padding: 1.5rem;
            max-width: 90%;
          }
          .hero-content h1 {
            font-size: 1.75rem;
          }
          .tagline {
            font-size: 1rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
