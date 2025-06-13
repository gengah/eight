// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaComment } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-base sm:text-lg">© 2025 EIGHT8. All Rights Reserved.</div>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 text-xl sm:text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 text-xl sm:text-2xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 text-xl sm:text-2xl">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 text-xl sm:text-2xl">
            <FaInstagram />
          </a>
          <a href="https://chat.example.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200 text-2xl sm:text-3xl">
            <FaComment />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;