import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">SkyElectronics</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the future of autonomous flight with cutting-edge electronics and drone technology 
              for professional and commercial applications worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Commercial Drones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Industrial Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Defense Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Agricultural Drones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Surveillance Equipment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Technical Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Training Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Custom Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Certification</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Innovation Drive</p>
                  <p>Tech Valley, CA 94025</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@aerodyne.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SkyElectronics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;