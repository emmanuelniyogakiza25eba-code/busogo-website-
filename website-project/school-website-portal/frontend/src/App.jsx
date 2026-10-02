import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './App.css';

import HomePage from './assets/Hero.jsx';
import AboutPage from './assets/AboutPage.jsx';
import AcademicsPage from './assets/AcademicsPage.jsx';
import FacilitiesPage from './FacilitiesPage.jsx';
import NewsPage from './assets/NewsPage.jsx';
import ContactPage from './assets/ContactPage.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import CustomCursor from './CustomCursor.jsx';

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'academics', to: '/academics' },
  { key: 'campus', to: '/facilities' },
  { key: 'news', to: '/news' },
  { key: 'contact', to: '/contact' },
];

function SiteLayout({ children }) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="busogo-shell">
      <CustomCursor />
      <div className="header-wrapper">
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="top-bar-info">
              <span className="info-item">
                <MapPin className="icon-sky" />
                {t('nav.location')}
              </span>
              <span className="info-item hide-mobile">
                <Mail className="icon-sky" />
                info@busogoi.rw
              </span>
            </div>

            <div className="top-bar-language">
              <span className="top-bar-language-divider" aria-hidden="true" />
              <LanguageSwitcher />
            </div>

            <Link to="/contact" className="portal-link">
              {t('nav.portal')}
              <ExternalLink className="icon-xs" />
            </Link>
          </div>
        </div>

        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="brand-logo" aria-label="Group Scolaire Busogo I home">
            <div className="logo-badge">
              <GraduationCap className="logo-icon" />
            </div>
            <div className="brand-copy">
              <span className="brand-title">G.S. Busogo I</span>
              <span className="brand-subtitle">Saint Benoît</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {t(`nav.items.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-cta">
            <Link to="/contact" className="btn-primary btn-primary-nav">
              {t('nav.apply')}
            </Link>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={t('nav.toggleMenu')}
          >
            {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-drawer">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`nav.items.${item.key}`)}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mobile-btn" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.apply')}
            </Link>
          </div>
        )}
        </header>
      </div>

      <main>{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div className="footer-col brand-footer">
            <Link to="/" className="brand-logo footer-brand">
              <div className="logo-badge">
                <GraduationCap className="logo-icon" />
              </div>
              <div className="brand-copy">
                <span className="brand-title">G.S. Busogo I</span>
                <span className="brand-subtitle">Saint Benoît</span>
              </div>
            </Link>
            <p>
              {t('footer.description')}
            </p>
            <div className="footer-slogan">{t('footer.slogan')}</div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/about">{t('nav.items.about')}</Link></li>
              <li><Link to="/academics">{t('nav.items.academics')}</Link></li>
              <li><Link to="/facilities">{t('footer.studentLife')}</Link></li>
              <li><Link to="/facilities">{t('nav.items.campus')}</Link></li>
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-map-col">
            <h4>{t('footer.location')}</h4>
            <p className="footer-address">{t('footer.address')}</p>
            <div className="map-frame">
              <iframe
                title={t('footer.mapTitle')}
                src="https://www.google.com/maps?q=Musanze%20Rwanda&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contactHours')}</h4>
            <ul className="footer-contact-list">
              <li><MapPin className="icon-sky-xs" /> {t('footer.contactAddress')}</li>
              <li><Phone className="icon-sky-xs" /> +250 788 316 663</li>
              <li><Mail className="icon-sky-xs" /> info@busogoi.rw</li>
              <li>{t('footer.hours')}</li>
              <li>{t('footer.admissions')}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Group Scolaire Busogo I - Saint Benoît. {t('footer.rights')}</p>
          <div className="footer-bottom-links">
            <Link to="/contact">{t('footer.safeguarding')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}
