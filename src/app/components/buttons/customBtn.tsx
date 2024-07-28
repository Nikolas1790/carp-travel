'use client'

import {FC} from 'react';
import styles from './customBtn.module.css';
import { Link } from 'react-scroll';

const CustomBtn: FC = () => {
  return (
    <Link
      className={styles.button}
      activeClass="active"
      to='contacts'
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      JOIN NOW
    </Link>
  );
};

export default CustomBtn;
