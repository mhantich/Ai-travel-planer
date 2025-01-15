import React from 'react';
import {  Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About', 'Contact'],
    Product: ['Hotels', 'Roam Around', 'Partner', 'Download App'],
    Legal: ['Privacy', 'Terms'],
    Resources: [
      'Best hotels in Bali',
      'Best hotels in Honolulu',
      'Best hotels in Bangkok',
      'Hawaii 5 days itinerary',
      'Italy 7 days itinerary',
      'California 7 days itinerary'
    ]
  };

  return (
    <footer className="bg-white  pt-16 pb-8 px-4 md:px-2">
      {/* Newsletter Section */}
      <div className="px-2 mx-auto mb-16 container">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Sign up to our newsletter</h2>
        <p className="text-gray-600 mb-4">
          A newsletter about traveling and using AI to make finding, planning and booking your vacations really easy. Don't search, just ask Layla.
        </p>
        <p className="text-gray-500 mb-6">Over 73,000 subscribers</p>
        <div className="flex gap-2 max-w-xl">
          <input
            type="email"
            placeholder="Type your email..."
            className="flex-1 px-1 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
          />
          <button className="px-2 py-2 bg-sky-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="text-sky-500 text-3xl font-bold mb-2">Mhx-Ai</div>
            <p className="text-gray-500">Your own travel genius.</p>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 All right reserved by 
             <a className='text-sky-500' href="https://mhantich.vercel.app/">Mhantich</a>
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {[ Instagram, Linkedin, Youtube, MessageCircle].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;