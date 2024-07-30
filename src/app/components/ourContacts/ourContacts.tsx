import {FC} from 'react';
import contacts from '../../../lib/data/contacts.json';
import styles from './ourContacts.module.css';
import { socialLinks } from '@/lib/utils/utils';

const OurContacts: FC = () => {
  return (
    <div className='mb-[12px] 
        md:flex md:justify-between md:w-[525px] md:ml-[34px] md:mb-[64px]
        xl:flex-col xl:ml-[83px] xl:w-[313px] xl:mb-0 '>

      <div className='md:w-[258px] xl:mb-[124px] xl:w-[310px]'>
        <div className='flex gap-5 mb-6  md:w-[258px] md:ml-[30px] xl:ml-[34px]  xl:w-[277px] xl:mb-[64px]' >
          <div className='ml-auto md:w-[157px] xl:w-[176px]'>
            <a href={`tel:${contacts.phone.firstNumber}`} className='link'>
              {contacts.phone.firstNumber}
            </a>
            <a href={`tel:${contacts.phone.secondNumber}`}  className='link'>
              {contacts.phone.secondNumber}
            </a>
          </div>
          <p className={styles.contactTitle}>{contacts.phone.titlePhoneNumber}</p>
        </div>

        <div className='flex items-center gap-5 ml-4 mb-[26px] md:m-0'>
          <a href={`mailto:${contacts.email.email}`} className='link'>
            {contacts.email.email}
          </a>
          <p className={styles.contactTitle}>{contacts.email.titleEmail}</p>
        </div>
      </div>

      <div className='flex gap-5 ml-[127px] md:w-[147px] md:ml-0 xl:w-[157px] xl:ml-[161px]'>
        <p className={styles.contactTitle}>{contacts.social.titleSotials}</p>
        <ul>
          {contacts.social.socialMedia.map((network) => (
            <li key={network} >
              <a href={socialLinks[network]} className='block link' >
                {network}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurContacts;