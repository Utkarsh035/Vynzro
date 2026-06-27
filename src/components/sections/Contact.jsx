import { useState } from 'react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import ScrollReveal from '../ui/ScrollReveal';
import SpotlightCard from '../ui/SpotlightCard';
import Magnetic from '../ui/Magnetic';
import { companyInfo, services } from '../../data/staticData';
import { submitContactForm } from '../../api/services/contactService';
import '../../styles/contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    botcheck: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitContactForm(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '', botcheck: '' });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('[Vynzro] Error submitting contact form:', error);
      }
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          {/* Form */}
          <ScrollReveal direction="left">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <input
                type="checkbox"
                name="botcheck"
                checked={Boolean(form.botcheck)}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={254}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+91 98XXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={30}
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={2000}
                  rows={5}
                  required
                />
              </div>

              <Magnetic strength={0.2}>
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={loading}
                  id="contact-submit-btn"
                >
                  {loading ? 'Sending...' : 'Send Message'} <HiOutlinePaperAirplane />
                </button>
              </Magnetic>

              {status === 'success' && (
                <div className="form-status success">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ✕ Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* Info sidebar */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="contact-info">
              <SpotlightCard className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><HiOutlineEnvelope /></div>
                  <div className="contact-info-text">
                    <h4>Email Us</h4>
                    <p>{companyInfo.email}</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><HiOutlinePhone /></div>
                  <div className="contact-info-text">
                    <h4>Call Us</h4>
                    <p>{companyInfo.phone}</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><HiOutlineMapPin /></div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="contact-social">
                  <Magnetic>
                    <a href={companyInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={companyInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={companyInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                  </Magnetic>
                </div>
              </SpotlightCard>

              {/* Quick response card */}
              <SpotlightCard className="contact-info-card" style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  ⚡
                </div>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--text-primary)',
                }}>
                  Quick Response
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  We typically respond within 2-4 hours during business hours.
                </p>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
