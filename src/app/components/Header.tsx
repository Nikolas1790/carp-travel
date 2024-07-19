import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            hhhhhhhhhhhhhhhhh
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">Who we are</a></li>
              <li><a href="#services">We offer</a></li>
              <li><a href="#career">Choose us</a></li>
              <li><a href="#gallery">Our gallery</a></li>
              <li><a href="#contacts">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
