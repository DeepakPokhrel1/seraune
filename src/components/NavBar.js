import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  // Set active link
  const handleSetActive = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`white-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="white-navbar">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => handleSetActive('home')}>
            <span className="logo-text">Seraune</span>
            <span className="logo-accent"></span>
          </Link>
          
          {/* Main Navigation */}
          <div className={`navbar-menu ${mobileMenuOpen ? 'menu-active' : ''}`}>
            <div className="menu-overlay" onClick={toggleMobileMenu}></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleSetActive('home')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                  onClick={() => handleSetActive('services')}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleSetActive('about')}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/portfolio" 
                  className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`}
                  onClick={() => handleSetActive('portfolio')}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/blog" 
                  className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
                  onClick={() => handleSetActive('blog')}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Action Button */}
          <div className="navbar-actions">
            <Link to="/contact" className="action-button">
              Contact Us
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className={`menu-button ${mobileMenuOpen ? 'is-active' : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="menu-button-bar"></span>
              <span className="menu-button-bar"></span>
              <span className="menu-button-bar"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;