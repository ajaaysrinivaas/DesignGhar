// pages/contact.tsx
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('manepgbj'); // Replace with your Formspree endpoint

  if (state.succeeded) {
    return <p className="success-message">Thank you for contacting Design Ghar!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="clean-form">
      <div className="form-table">
        {/* Row: Your Name */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" name="Name" required />
            <ValidationError prefix="Name" field="Name" errors={state.errors} />
          </div>
        </div>
        {/* Row: Phone Number */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" name="Phone" required />
            <ValidationError prefix="Phone" field="Phone" errors={state.errors} />
          </div>
        </div>
        {/* Row: Email Address */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="Email" required />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />
          </div>
        </div>
        {/* Row: Project Type */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="projectType">Project Type</label>
            <select id="projectType" name="ProjectType">
              <option value="">Select a project type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Renovation">Renovation</option>
              <option value="Other">Other</option>
            </select>
            <ValidationError prefix="ProjectType" field="ProjectType" errors={state.errors} />
          </div>
        </div>
        {/* Row: Budget Range */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="budgetRange">Budget Range</label>
            <select id="budgetRange" name="BudgetRange">
              <option value="">Select your budget range</option>
              <option value="Under ₹3 Lakhs">Under ₹3 Lakhs</option>
              <option value="₹3 Lakhs - ₹7 Lakhs">₹3 Lakhs - ₹7 Lakhs</option>
              <option value="₹7 Lakhs - ₹15 Lakhs">₹7 Lakhs - ₹15 Lakhs</option>
              <option value="Over ₹15 Lakhs">Over ₹15 Lakhs</option>
            </select>
            <ValidationError prefix="BudgetRange" field="BudgetRange" errors={state.errors} />
          </div>
        </div>
        {/* Row: Project Address */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="address">Project Address</label>
            <input
              id="address"
              type="text"
              name="Address"
              placeholder="e.g., Jubilee Hills, Hyderabad"
              required
            />
            <ValidationError prefix="Address" field="Address" errors={state.errors} />
          </div>
        </div>
        {/* Row: Your Message */}
        <div className="form-row">
          <div className="form-cell">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="Message" rows={4} required />
            <ValidationError prefix="Message" field="Message" errors={state.errors} />
          </div>
        </div>
      </div>
      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
      <style jsx>{`
        .clean-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          line-height: 1.5;
        }
        .form-table {
          display: table;
          width: 100%;
        }
        .form-row {
          display: table-row;
          margin-bottom: 0.8rem;
        }
        .form-cell {
          display: table-cell;
          width: 100%;
        }
        label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: #f0f0f0;
        }
        input,
        select,
        textarea {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #444;
          border-radius: 6px;
          background: #2b2b2b;
          color: #f0f0f0;
          font-size: 1rem;
          transition: border 0.3s ease;
        }
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #0070f3;
          outline: none;
        }
        button {
          align-self: flex-start;
          background: #f0f0f0;
          color: #1f1f1f;
          font-weight: bold;
          border: none;
          border-radius: 6px;
          padding: 0.9rem 1.8rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        button:hover {
          background: #e0e0e0;
          transform: scale(1.03);
        }
        .success-message {
          font-size: 1.2rem;
          color: #f0f0f0;
          text-align: center;
          margin-top: 1rem;
        }
      `}</style>
    </form>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = [
    {
      question: 'How long does a project take?',
      answer:
        'Project durations vary based on scope and design requirements. Typically, a project can take from a few weeks to several months.',
    },
    {
      question: 'Do you offer customized design solutions?',
      answer:
        'Absolutely! Each design is tailored to reflect your unique style, blending modern aesthetics with a traditional touch.',
    },
    {
      question: 'Can you work within my budget?',
      answer:
        'Yes, we work closely with our clients to deliver design solutions that meet both their aesthetic and financial requirements.',
    },
  ];

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-card ${openIndex === index ? 'open' : ''}`}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <h3>{item.question}</h3>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
      <style jsx>{`
        .faqs {
          max-width: 100%;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: #141414;
          border-radius: 12px;
          text-align: center;
        }
        .faqs h2 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #f0f0f0;
        }
        .faq-card {
          background: rgba(43, 43, 43, 0.8);
          border-radius: 30px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 1.5rem 2rem;
          margin-bottom: 1.5rem;
          transition: background 0.3s ease;
          cursor: pointer;
          text-align: left;
        }
        .faq-card:hover {
          background: rgba(43, 43, 43, 1);
        }
        .faq-card h3 {
          margin: 0 0 0.8rem;
          font-size: 1.2rem;
          color: #f0f0f0;
        }
        .faq-card p {
          margin: 0;
          font-size: 1rem;
          color: #ccc;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

const Contact: NextPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="contact-container">
          {/* Left Column: Map & Location Info */}
          <div className="left-column card">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9657150785864!2d78.4044513152468!3d17.38504418833866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdd8b49ad6b8b1%3A0x91f6b2d46e7ec56f!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1690590812374!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Jubilee Hills, Hyderabad"
            ></iframe>
            <div className="location-info">
              <p>
                <strong>Address:</strong> Design Ghar, Jubilee Hills, Hyderabad, India
              </p>
              <p>
                <strong>Call us:</strong> +91 12345 67890
              </p>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="right-column card">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
      <style jsx>{`
        .container {
          width: 100%;
          min-height: 100vh;
          background-color: #1f1f1f;
          color: #f0f0f0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        main {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 4rem;
          box-sizing: border-box;
        }
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .card {
          background: #2b2b2b;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        .left-column h2,
        .right-column h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        .location-info p {
          font-size: 1rem;
          margin: 0.5rem 0;
          color: #ccc;
        }
        @media (max-width: 900px) {
          main {
            padding: 2rem 1rem;
          }
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
