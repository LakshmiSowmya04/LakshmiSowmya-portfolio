import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Assuming you're using icons from lucide-react
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

  // Handle scroll to add 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="left">
          <Link to="/">Lakshmi Sowmya</Link>
        </div>
        <div className="right">
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="controls">
          {/* <button onClick={toggleDarkMode}>
            {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button> */}
          <button onClick={toggleMenu} className="menu-btn">
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
