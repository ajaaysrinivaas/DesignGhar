import type { NextPage } from 'next';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const About: NextPage = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="about-page">
      <Header />
      <main>
        {/* About Introduction */}
        <section ref={addToRefs} className="section about-intro centered">
          <div className="content">
            <h1>About Design Ghar</h1>
            <p>
              At Design Ghar, interior design is a heartfelt extension of who you are.
              We celebrate the uniqueness of every home with a desi, homely touch that transforms spaces
              into soulful reflections of personality.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section ref={addToRefs} className="section our-vision image-left">
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              We strive to create interiors that are inviting, warm, and authentically you. Every design we craft
              enhances the beauty of your personal space with soft hues and a splash of personality.
            </p>
          </div>
          <div className="image">
            <img src="/vision.jpg" alt="Bright and airy room" className="section-image" />
          </div>
        </section>

        {/* Our Story */}
        <section ref={addToRefs} className="section our-story image-right">
          <div className="content">
            <h2>Our Story</h2>
            <p>
              Born from a passion for home and heritage, Design Ghar blends traditional desi aesthetics with modern
              design principles. Our journey is one of innovation, warmth, and a desire to make every home feel unique.
            </p>
          </div>
          <div className="image">
            <img src="/story.jpg" alt="A blend of modern and traditional design" className="section-image" />
          </div>
        </section>

        {/* The Founder */}
        <section ref={addToRefs} className="section founder image-left">
          <div className="content">
            <h2>The Founder</h2>
            <p>
              Our founder, PA, believes every home is a canvas for self-expression. With a refined eye for detail and
              a deep respect for cultural roots, PA has transformed spaces into warm, inviting havens.
            </p>
          </div>
          <div className="image">
            <img src="/founder.jpg" alt="Founder portrait" className="section-image" />
          </div>
        </section>

        {/* Our Philosophy */}
        <section ref={addToRefs} className="section philosophy image-right">
          <div className="content">
            <h2>Our Philosophy</h2>
            <p>
              We believe a well-designed space nurtures the soul. Our philosophy is simple: merge functionality with art,
              tradition with modernity, and aesthetics with comfort to create homes that truly speak to the heart.
            </p>
          </div>
          <div className="image">
            <img src="/philosophy.jpg" alt="Softly lit interior" className="section-image" />
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .about-page {
          position: relative;
          background: linear-gradient(135deg, #1c1c1c, #292929);
          animation: gradientShift 10s ease infinite;
          color: #f0f0f0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding-bottom: 1rem;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        main {
          max-width: 1000px;
          margin: 1rem auto;
          padding: 0 1rem;
        }
        .section {
          display: flex;
          align-items: center;
          padding: 1.5rem 1rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          background: rgba(40, 40, 40, 0.95);
        }
        .section:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
        }
        .content {
          flex: 1;
          padding: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.4;
          color: #ccc;
        }
        .content h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .content h2 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }
        .image {
          flex: 1;
          padding: 0.75rem;
          display: flex;
          justify-content: center;
        }
        .section-image {
          width: 90%;
          max-width: 300px;
          border-radius: 6px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .section-image:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
        }
        /* Alternating layout */
        .image-right .content {
          order: 1;
        }
        .image-right .image {
          order: 2;
        }
        .image-left .content {
          order: 2;
        }
        .image-left .image {
          order: 1;
        }
        /* Centered layout */
        .centered {
          justify-content: center;
          text-align: center;
        }
        @media (max-width: 768px) {
          .section {
            flex-direction: column;
            text-align: center;
            padding: 1rem 0;
          }
          .content,
          .image {
            order: unset;
            padding: 0.5rem 0;
          }
          .section-image {
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
