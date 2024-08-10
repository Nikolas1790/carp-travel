import career from '../lib/data/career.json';
import { FC } from 'react';

const CareerOpportunityText: FC = () => {
  return (
    <p className='text w-[179px] ml-auto mb-6 font-extralight  md:w-auto md:mb-0 xl:w-[234px] xl:ml-0'>              
      {career.callForForms.split('!')[0]}!<br />
      {career.callForForms.split('!')[1]}!
    </p>
  );
};

export default CareerOpportunityText;