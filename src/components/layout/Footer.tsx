import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel as Mosque, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Mosque className="h-8 w-8 text-accent-500" />
              <span className="font-heading font-bold text-2xl text-white">Al Barakah</span>
            </div>
            <p className="text-gray-300">
              A spiritually-driven, non-profit Islamic organization facilitating Hajj & Umrah, while 
              empowering Muslim communities through charity, education, and financial aid.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/hajj-umrah" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Hajj & Umrah
                </Link>
              </li>
              <li>
                <Link to="/charity" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Charity Services
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Islamic Center Blvd, <br />
                  Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-accent-500 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@albarakah.org" className="text-gray-300 hover:text-accent-500 transition-colors">
                  info@albarakah.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-heading mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our services, events, and campaigns.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-500 text-dark font-medium py-3 rounded-xl hover:bg-accent-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 mt-10 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Al Barakah Foundation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;