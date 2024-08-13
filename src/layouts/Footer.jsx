// src/layouts/Footer.jsx
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-sm text-center md:text-left mb-2 md:mb-0">
          <p>Developed by Muhammad Danish &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/Danish143SFZ1002/" target="_blank" className="hover:text-yellow-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-danish-598000164/" target="_blank" className="hover:text-yellow-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Danish1042" target="_blank" className="hover:text-yellow-300">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" className="hover:text-yellow-300">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
