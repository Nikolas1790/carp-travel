import React from 'react';
import Container from '../wrappers/Container';
import Logo from '../logo';
import NavMenu from '../navMenu';
import BurgerMenu from '../burgerMenu';

const Header: React.FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 py-9 z-10 md:py-6 ">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:block">
            <NavMenu />
          </nav>
          <div className=" md:hidden">
            <BurgerMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;