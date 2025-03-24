// pages/contact.tsx
import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How long does a project take?',
    answer: 'Depending on the scope, projects can take anywhere from a few weeks to several months.',
  },
  {
    question: 'What is your design process?',
    answer: 'My process starts with an in-depth consultation, followed by design planning, execution, and final touches.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Absolutely. Every project is tailored to reflect the client’s unique style and needs.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq">
          <h3 onClick={() => toggleFAQ(index)}>{item.question}</h3>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
      <style jsx>{`
        .faqs {
          margin-top: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .faq {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: #2b2b2b;
          border-radius: 4px;
          border: 1px solid #333;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .faq:hover {
          background: #333;
        }
        .faq h3 {
          margin: 0;
          font-size: 1.1rem;
          color: #f0f0f0;
        }
        .faq p {
          margin: 0.5rem 0 0;
          font-size: 1rem;
          color: #ccc;
        }
      `}</style>
    </div>
  );
};

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9657150785864!2d78.4044513152468!3d17.38504418833866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdd8b49ad6b8b1%3A0x91f6b2d46e7ec56f!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1690590812374!5m2!1sen!2sus"
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
        <FAQ />
      </main>
      <Footer />

      <style jsx>{`
        .contact-page {
          background: #1c1c1c;
          color: #f0f0f0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding-bottom: 1rem;
        }
        main {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #f0f0f0;
        }
        p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          color: #ccc;
        }
        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .contact-form,
        .contact-info {
          background: #2b2b2b;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
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
          color: #f0f0f0;
          font-size: 0.95rem;
        }
        input,
        textarea {
          padding: 0.75rem;
          border: 1px solid #555;
          border-radius: 4px;
          font-size: 1rem;
          background: #333;
          color: #f0f0f0;
        }
        button {
          padding: 0.75rem;
          border: none;
          background: #f0f0f0;
          color: #1c1c1c;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          align-self: flex-start;
          font-size: 1rem;
        }
        button:hover {
          background: #e0e0e0;
          transform: scale(1.05);
        }
        .success-message {
          font-size: 1.2rem;
          color: #f0f0f0;
          text-align: center;
        }
        .social a {
          margin-right: 1rem;
          text-decoration: none;
          color: #f0f0f0;
          font-size: 1rem;
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
