import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/staticData';
import Logo from '../ui/Logo';
import Magnetic from '../ui/Magnetic';
import '../../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -18,
      scale: 0.98,
      filter: 'blur(8px)',
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 1, 1],
        when: 'afterChildren',
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.055,
        delayChildren: 0.08,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: 10 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={link.href === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Magnetic>
            <Link to="/contact" className="navbar-cta">
              Get Started
            </Link>
          </Magnetic>

          {/* Mobile hamburger */}
          <button
            className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              className="mobile-nav-backdrop open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Card */}
            <motion.div
              className="mobile-nav-card open"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div className="mobile-nav-intro" variants={mobileItemVariants}>
                <span>V / MENU</span>
                <p>Ideas shaped into<br />digital products.</p>
                <small>IND / 2026</small>
              </motion.div>
              <div className="mobile-nav-card-links">
                {navLinks.map((link, index) => (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) => isActive ? 'active' : ''}
                      end={link.href === '/'}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mobile-nav-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{link.label}</span>
                      <span className="mobile-nav-arrow">↗</span>
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div className="mobile-nav-card-footer" variants={mobileItemVariants}>
                  <Link to="/contact" className="mobile-cta-btn" onClick={() => setMobileOpen(false)}>
                    Start a project <span>→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
