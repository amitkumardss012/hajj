import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Fuel as Mosque, Menu, X, Languages, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Hajj & Umrah', path: '/hajj-umrah' },
    { name: 'Charity', path: '/charity' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Mosque className="h-8 w-8 text-primary-500" />
          <span className="font-heading font-bold text-xl md:text-2xl text-primary-500">
            HaJJ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-dark hover:text-primary-500 hover:bg-primary-50'
                }`
              }
              end={item.path === '/'}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center text-dark hover:text-primary-500 transition-colors">
            {/* <Languages className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">EN</span> */}
          </button>
          <Link to="/donate" className="btn btn-primary">
            <Heart className="h-4 w-4 mr-2" />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-dark hover:bg-primary-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom py-20">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium text-lg ${
                    isActive
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-dark hover:text-primary-500 hover:bg-primary-50'
                  }`
                }
                onClick={closeMenu}
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button className="flex items-center px-4 py-3 text-dark hover:text-primary-500 transition-colors">
                <Languages className="h-5 w-5 mr-2" />
                <span className="font-medium">English</span>
              </button>
              <Link
                to="/donate"
                className="mt-4 btn btn-primary w-full justify-center"
                onClick={closeMenu}
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;