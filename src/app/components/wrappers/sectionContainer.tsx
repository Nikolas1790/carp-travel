import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full mx-auto px-5 sm:max-w-container-sm md:max-w-container-md xl:max-w-container-xl">
      {children}
    </div>
  );
}

export default Container;
