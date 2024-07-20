import React from 'react';
import Container from '../wrappers/sectionContainer';
import Logo from '../logo';
import NavMenu from '../navMenu';

const Header: React.FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 py-9 md:py-6 ">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:block">
            <NavMenu />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;