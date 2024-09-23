import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const GetBtn = () => {
  return (
    <>
      <div className='h-14 w-44 shadow-lg bg-gradient-custom font-semibold  text-white flex items-center justify-center'>
        Get A Quote <FaArrowRight className='ms-3' />

      </div>
    </>
  );
};

export default GetBtn;
