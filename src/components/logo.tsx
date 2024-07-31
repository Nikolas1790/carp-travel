import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href='#hero' aria-label="Go to main content" className="inline-block transition-transform duration-300 hover:scale-110" >
      <Image src="/svg/logo.svg" alt="Logo" className="h-8.5" width={61} height={33} />
    </a>
  );
};

export default Logo;