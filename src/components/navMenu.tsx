'use client'

import React from 'react';
import navList from '../../lib/data/navList'
import { Link } from 'react-scroll';

interface NavMenuProps {
  toggleModal?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ toggleModal })  => {
  return (
    <ul className="text-[18px] space-y-12  md:flex md:text-base md:space-y-0 md:space-x-6  xl:space-x-14 " >
      {navList.map((i) => (
        <li key={i.name}>
          <Link
            className='link '
            activeClass="active"
            to={i.href} 
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleModal}
            tabIndex={0}
          >
            {i.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
