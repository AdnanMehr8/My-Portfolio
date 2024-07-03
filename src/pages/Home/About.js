import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import crown from './2.png';

const About = () => {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  return (
    <div>
      <div className='tab animate-autoShow'>
        <div className='autoShow'>
          <SectionTitle title="About" />
        </div>
        <div className='flex w-full flex-col items-center autoShow sm:flex-col'>
          <div className='w-full autoShow sm:w-full'>
            <p className='text-white'>{description1 || ''}</p>
            <p className='text-white'>{description2 || ''}</p>
          </div>
          {/* <div className='relative flex-1'>
            <div className='relative'>
              <img className='absolute top-[-120px] right-[200px] h-[60vh] w-30 autoRotate autoShow' src={crown} />
            </div> */}
            {/* <dotlottie-player src={lottieURL} background="transparent" speed="1" loop autoplay></dotlottie-player> */}
          {/* </div> */}
        </div>
        <div className='py-5'>
          <h1 className='text-secondary text-xl autoShow'>Here are a few technologies I've been working with recently</h1>
          <div className='flex flex-wrap gap-10 mt-5 autoShow'>
            {skills.map((skill, index) => (
              <div key={index} className='border border-tertiary border-solid py-3 px-10 rounded-lg'>
                <h1 className='text-tertiary text-xl'>{skill}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
