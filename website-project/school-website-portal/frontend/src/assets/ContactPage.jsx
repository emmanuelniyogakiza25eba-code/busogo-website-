import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, Plane } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="contact-page-shell">
      <style>{`
        .contact-page-shell {
          background: linear-gradient(180deg, #f5f9ff 0%, #edf4ff 100%);
          color: #0f172a;
          font-family: var(--font-body);
        }

        .contact-page-shell * {
          box-sizing: border-box;
        }

        .contact-page-shell h1,
        .contact-page-shell h2,
        .contact-page-shell h3,
        .contact-page-shell h4,
        .contact-page-shell p,
        .contact-page-shell label,
        .contact-page-shell input,
        .contact-page-shell textarea,
        .contact-page-shell button,
        .contact-page-shell a {
          white-space: normal;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .contact-page-shell h1,
        .contact-page-shell h2,
        .contact-page-shell h3,
        .contact-page-shell h4 {
          margin: 0;
          font-family: var(--font-heading);
          line-height: 1.15;
          color: #0f172a;
        }

        .contact-page-shell p,
        .contact-page-shell label,
        .contact-page-shell input,
        .contact-page-shell textarea,
        .contact-page-shell a,
        .contact-page-shell button {
          font-family: var(--font-body);
        }

        .contact-page-shell a {
          text-decoration: none;
        }

        .contact-section-shell {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .contact-hero {
          background:
            linear-gradient(90deg, rgba(2, 8, 23, 0.7), rgba(15, 23, 42, 0.72)),
            url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600') center/cover no-repeat;
          min-height: 500px;
          display: flex;
          align-items: center;
        }

        .contact-hero-inner {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 9rem 0 5rem;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          border: 1px solid rgba(96, 165, 250, 0.7);
          background: rgba(15, 23, 42, 0.18);
          color: #dbeafe;
          border-radius: 999px;
          padding: 0.7rem 1.1rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          margin-top: 1.2rem;
          max-width: 760px;
          font-size: clamp(2.9rem, 5vw, 4.2rem);
          letter-spacing: -0.05em;
          color: #fff;
        }

        .contact-hero h1 .blue-text {
          color: #60a5fa;
        }

        .contact-hero p {
          margin-top: 1rem;
          max-width: 720px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 1.08rem;
          line-height: 1.8;
        }

        .contact-main {
          padding: 4rem 0 2rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          align-items: start;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1e56a0;
          font-weight: 800;
          margin-bottom: 0.9rem;
        }

        .contact-panel-title {
          font-size: clamp(2rem, 3vw, 2.7rem);
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .contact-info-list {
          display: grid;
          gap: 1rem;
        }

        .contact-info-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.14);
          border-radius: 1.35rem;
          padding: 1.25rem 1.15rem;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease-out;
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          min-height: 160px;
        }

        .contact-info-card:hover {
          transform: translate(-2px, -8px) translateX(1px);
          border-color: rgba(30, 86, 160, 0.8);
          box-shadow: 0 22px 36px rgba(15, 23, 42, 0.1);
        }

        .contact-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 1rem;
          background: rgba(30, 86, 160, 0.1);
          color: #1e56a0;
          flex-shrink: 0;
        }

        .contact-info-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
        }

        .contact-info-content h3 {
          font-size: 1.12rem;
          color: #0f172a;
        }

        .contact-info-content p {
          color: #475569;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .contact-form-card {
          background: rgba(255,255,255,0.96);
          border: 1px solid rgba(30,86,160,0.12);
          border-radius: 1.5rem;
          box-shadow: 0 18px 32px rgba(15,23,42,0.06);
          padding: 1.8rem;
        }

        .contact-form-grid {
          display: grid;
          gap: 1rem;
        }

        .form-field {
          display: grid;
          gap: 0.55rem;
        }

        .form-field label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: 0.02em;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.5);
          background: #f8fbff;
          border-radius: 0.95rem;
          padding: 0.9rem 0.95rem;
          font-size: 0.98rem;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: rgba(30,86,160,0.8);
          box-shadow: 0 0 0 4px rgba(30, 86, 160, 0.08);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 145px;
        }

        .contact-submit {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border: none;
          border-radius: 999px;
          padding: 0.95rem 1.4rem;
          background: #1e56a0;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .contact-submit:hover {
          background: #163f7d;
          transform: translateY(-1px);
        }

        .visit-section {
          padding: 1rem 0 4rem;
        }

        .visit-header {
          margin-bottom: 1.2rem;
        }

        .map-panel {
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(30, 86, 160, 0.14);
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.04);
          background: #fff;
        }

        .map-panel iframe {
          width: 100%;
          min-height: 360px;
          border: 0;
          display: block;
        }

        .map-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 1rem;
        }

        .map-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.8rem 1.2rem;
          font-weight: 700;
          border: 1px solid rgba(30, 86, 160, 0.2);
          background: #fff;
          color: #1e56a0;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            min-height: 440px;
          }

          .contact-form-card {
            padding: 1.25rem;
          }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-badge">
            <Plane size={15} />
            Contact Excellence Since 1952
          </span>

          <h1>
            Connect with G.S. Busogo I <span className="blue-text">Excellence</span>
          </h1>

          <p>
            Connect with Rwanda's premier science institution - where your academic aspirations transform into
            real-world innovation and global leadership opportunities.
          </p>

        </div>
      </section>

      <section className="contact-main">
        <div className="contact-section-shell contact-layout">
          <div>
            <div className="section-eyebrow">Contact Info</div>
            <h2 className="contact-panel-title">Get In Touch</h2>

            <div className="contact-info-list">
              <div className="contact-info-card" role="listitem">
                <div className="contact-icon-wrap">
                  <MapPin size={22} strokeWidth={2.2} />
                </div>
                <div className="contact-info-content">
                  <h3>Address</h3>
                  <p>Busogo, Musanze District, Northern Province, Rwanda</p>
                </div>
              </div>

              <div className="contact-info-card" role="listitem">
                <div className="contact-icon-wrap">
                  <Phone size={22} strokeWidth={2.2} />
                </div>
                <div className="contact-info-content">
                  <h3>Phone</h3>
                  <p>+250 788 316 663</p>
                </div>
              </div>

              <div className="contact-info-card" role="listitem">
                <div className="contact-icon-wrap">
                  <Mail size={22} strokeWidth={2.2} />
                </div>
                <div className="contact-info-content">
                  <h3>Email</h3>
                  <p>info@busogoi.rw</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card" id="contact-form">
            <h2 className="contact-panel-title" style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>

            <form className="contact-form-grid">
              <div className="form-field">
                <label htmlFor="full-name">Full Name*</label>
                <input id="full-name" type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject*</label>
                <input id="subject" type="text" placeholder="Enter subject" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message*</label>
                <textarea id="message" rows="5" placeholder="Write your message here..." />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit-campus">
        <div className="contact-section-shell">
          <div className="visit-header">
            <div className="section-eyebrow">Campus Visit</div>
            <h2 className="contact-panel-title" style={{ marginBottom: 0 }}>Visit Our Campus</h2>
          </div>

          <div className="map-panel">
            <iframe
              title="Busogo Campus Map"
              src="https://www.google.com/maps?q=Busogo%20Musanze%20Rwanda&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="map-actions">
            <a
              className="map-btn"
              href="https://www.google.com/maps/search/?api=1&query=Busogo+Musanze+Rwanda"
              target="_blank"
              rel="noreferrer"
            >
              Open Map
            </a>
            <a
              className="map-btn"
              href="https://www.google.com/maps/dir/?api=1&destination=Busogo+Musanze+Rwanda"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
