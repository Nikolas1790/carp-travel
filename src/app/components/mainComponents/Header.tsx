import React from 'react';
import Container from '../wrappers/sectionContainer';

const Header: React.FC = () => {
  return (
    <header className="flex  ">
      <Container>
        <div className="flex items-center justify-between">
          <img src="/svg/logo.svg" alt="Logo" className="h-8" />
          <nav>
            <ul className="flex space-x-14">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
