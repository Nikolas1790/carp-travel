import React from 'react';
import navList from '../../lib/data/navList'

interface NavMenuProps {
  toggleModal?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ toggleModal })  => {
  return (
    <ul className="text-[18px] space-y-12  md:flex md:text-base md:space-y-0 md:space-x-6  xl:space-x-14 " >
      {navList.map((i) => (
        <li key={i.name}>
          <a href={i.href} onClick={toggleModal}>
            {i.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
