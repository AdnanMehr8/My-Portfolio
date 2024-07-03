import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import spinner from './3.png';

const Experiences = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector(state => state.root);
    const { experiences } = portfolioData;
    return (
        <div>
            <div className='tab autoShow'>
            <div className='autoShow'>

            <SectionTitle title="Experience" />
            </div>
            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10  w-1/3 sm:flex-row sm:overflow-x-scroll autoShow sm:w-full'>
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer px-3 py-12'
                            
                        >
                            <h1
                                className={`text-xl px-5
                                 ${selectedItemIndex === index ? "text-tertiary -ml-[3px] bg-[#696969]   py-3" : "text-white"}`}
                            >
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>


                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-3xl autoShow '>{experiences[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary text-xl autoShow '>{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white autoShow'>{experiences[selectedItemIndex].description}</p>
                </div>
                {/* <div>
              <img className='absolute top-[-40px] right-[200px] h-30 w-30 autoRotate autoShow' src={spinner} />

                </div> */}
            </div>
        </div>
        </div>
    )
}

export default Experiences 