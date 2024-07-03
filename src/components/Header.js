import React from 'react';

const Header = () => {
  return (
    <div className='fixed top-0 right-0 left-0 p-5 flex justify-end bg-primary z-10 '>
      <a href="#about" className='ml-5'>
        <h1 className='text-secondary text-xl font-semibold'>About</h1>
      </a>
      <a href="#experiences" className='ml-5'>
        <h1 className='text-secondary text-xl font-semibold'>Experience</h1>
      </a>
      <a href="#projects" className='ml-5'>
        <h1 className='text-secondary text-xl font-semibold'>Projects</h1>
      </a>
      <a href="#contact" className='ml-5'>
        <h1 className='text-secondary text-xl font-semibold'>Contact</h1>
      </a>
    </div>
  );
};

export default Header;
