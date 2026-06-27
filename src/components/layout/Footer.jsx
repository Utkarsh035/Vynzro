import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import Magnetic from '../ui/Magnetic';
import { companyInfo, footerLinks } from '../../data/staticData';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Footer Columns */}
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo inverse />
            <p>
              A next-generation IT company building premium digital products and delivering
              world-class technology services. Founded with a vision to innovate.
            </p>
            <div className="footer-social">
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
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vynzro. All rights reserved. Built with ❤ and ambition.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
