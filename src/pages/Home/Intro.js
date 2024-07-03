import React from 'react';
import profilePhoto from './profilePhoto.png';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div>
    <div>
      <img
        className="absolute top-8 left-6 w-20 h-20 opacity-75 transform -translate-y-1/2 rounded-full"
        src={profilePhoto}
        alt="Profile"
      />
    </div>
    <div className="relative h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white autoBLur">{welcomeText || ''}</h1>
      <h1 className="text-6xl sm:text-3xl text-secondary font-semibold autoBLur">
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold autoBLur">{caption || ''}</h1>
      <p className="text-white w-2/3 autoBLur">{description || ''}</p>
    </div>      
    </div>
  );
};

export default Intro;
