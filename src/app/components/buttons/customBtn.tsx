import {FC} from 'react';
import styles from './customBtn.module.css';

const CustomBtn: FC = () => {
  return (
    <a href='#contacts' className={styles.button}>
      JOIN NOW
    </a>
  );
};

export default CustomBtn;
