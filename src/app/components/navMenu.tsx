import React from 'react';
import navList from '../../lib/data/navList'

const NavMenu: React.FC = () => {
  return (
    <ul className=" md:flex md:space-x-6 xl:space-x-14">
      {navList.map((i) => (
        <li key={i.name}>
          <a href={i.href} >
            {i.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
