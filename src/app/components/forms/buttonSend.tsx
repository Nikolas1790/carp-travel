"use client"

import React, { FC } from 'react';

const ButtonSend: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <button 
        type="submit" 
        className=" text-[30px] font-medium leading-[1.2] ml-auto xl:text-[32px]"
      >
        SEND
      </button>
    </div>
  );
};

export default ButtonSend;