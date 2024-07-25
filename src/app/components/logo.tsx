import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href='#hero' >
      <Image src="/svg/logo.svg" alt="Logo" className="h-8.5" width={10} height={10} />
    </a>
  );
};

export default Logo;
