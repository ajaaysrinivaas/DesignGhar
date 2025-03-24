// pages/contact.tsx
import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('xanejbke'); // Replace with your actual Formspree endpoint
  if (state.succeeded) {
    return <p className="success-message">Thanks for getting in touch!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}

const Contact: NextPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <h1>Get in Touch</h1>
        <p>
          Whether you have a project in mind or just want to chat about design, I’d love to hear from you.
        </p>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <ContactForm />
          </div>
          <div className="contact-info">
            <h2>Visit Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196876153436!2d-122.41941508468128!3d37.77492927975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5a9b1b7d%3A0x5c8c69c9a9b1d8b0!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1617221051234!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Our Location"
            ></iframe>
            <div className="social">
              <h2>Follow Me</h2>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <section className="faqs">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <h3>How long does a project take?</h3>
            <p>
              Depending on the scope, projects can take anywhere from a few weeks to several months.
            </p>
          </div>
          <div className="faq">
            <h3>What is your design process?</h3>
            <p>
              My process starts with an in-depth consultation, followed by design planning, execution, and final touches.
            </p>
          </div>
          <div className="faq">
            <h3>Do you offer customized solutions?</h3>
            <p>
              Absolutely. Every project is tailored to reflect the client’s unique style and needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .contact-page {
          background: #fff;
          color: #4a3f35;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }
        p {
          text-align: center;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #555;
        }
        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .contact-form,
        .contact-info {
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        /* Form Styles */
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        label {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        input,
        textarea {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          padding: 0.75rem;
          border: none;
          background: #4a3f35;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          align-self: flex-start;
        }
        button:hover {
          background: #3a2f2a;
          transform: scale(1.05);
        }
        .success-message {
          font-size: 1.2rem;
          color: #4a3f35;
          text-align: center;
        }
        .social a {
          margin-right: 1rem;
          text-decoration: none;
          color: #4a3f35;
        }
        .faqs {
          margin-top: 2rem;
        }
        .faq {
          margin-bottom: 1.5rem;
          text-align: left;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
