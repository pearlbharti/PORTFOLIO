import React from 'react';
import './navbar.css'; // Add this if you have specific CSS for your navbar

function Navbar() {
  // Toggle function to handle the mobile navigation
  const handleNavToggle = () => {
    const nav = document.querySelector('nav');
    const isToggled = nav.getAttribute('data-toggled') === 'true';
    nav.setAttribute('data-toggled', !isToggled);
  };

  return (
    <nav data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" className="nav-section">
        <a href="#">
          {/* Insert your SVG here */}
          <svg width="24" height="30.5" viewBox="0 0 48 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35.5" cy="58.5" r="2.5" fill="#D9D9D9" />
            <path d="M23.5039 3.15353C34.3713 1.77892 46.9561 9.82562 44.7448 19.6485C42.8219 28.1901 23.5039 30.187 23.5039 30.187M23.5039 3.15353C23.5039 13.7108 23.5039 30.187 23.5039 30.187M23.5039 3.15353C13.6244 2.2372 1.06372 10.0986 3.2509 19.6485C5.13537 27.8768 23.5039 30.187 23.5039 30.187M23.5039 30.187C23.5039 30.187 24.9858 54.0132 23.5039 57.2205C22.0219 60.4278 3.71252 53.2646 3.2509 44.391C2.77298 35.2043 23.5039 30.187 23.5039 30.187Z" stroke="white" strokeWidth="5" />
            <path d="M23.5039 3.15353C34.3713 1.77892 46.9561 9.82562 44.7448 19.6485C42.8219 28.1901 23.5039 30.187 23.5039 30.187M23.5039 3.15353C23.5039 13.7108 23.5039 30.187 23.5039 30.187M23.5039 3.15353C13.6244 2.2372 1.06372 10.0986 3.2509 19.6485C5.13537 27.8768 23.5039 30.187 23.5039 30.187M23.5039 30.187C23.5039 30.187 24.9858 54.0132 23.5039 57.2205C22.0219 60.4278 3.71252 53.2646 3.2509 44.391C2.77298 35.2043 23.5039 30.187 23.5039 30.187Z" stroke="black" strokeOpacity="0.2" strokeWidth="5" />
          </svg>
        </a>
      </div>

      <div id="nav-mobile-section">
        <div id="nav-link-section" className="nav-section">
          <a href="#">home</a>
          <a href="#">about</a>
        </div>
        <div id="nav-social-section" className="nav-section">
          <a href="https://medium.com/@pbharti_59193">
            <i className="fab fa-medium"></i>
          </a>
          <a href="mailto:pbharti@wisc.edu">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div id="nav-contact-section" className="nav-section">
          <a href="#">resume</a>
        </div>
      </div>

      <button id="nav-toggle-button" type="button" onClick={handleNavToggle}>
        <span>Menu</span>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
}

export default Navbar;
