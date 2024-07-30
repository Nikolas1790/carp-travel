import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-container-sm mx-auto px-5 sm:max-w-container-sm  md:max-w-container-md md:px-8  xl:max-w-container-xl xl:px-6">
      {children}
    </div>
  );
}

export default Container;