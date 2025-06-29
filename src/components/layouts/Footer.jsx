import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-sm text-black py-6 bg-white border-t border-gray-200">
      &copy; {new Date().getFullYear()} Created by{" "}
      <a 
        href="https://ahmad-gilvan.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-medium text-primary"
      >
        Ahmad Gilvan
      </a>. All rights reserved.
    </footer>
  );
};

export default Footer;
