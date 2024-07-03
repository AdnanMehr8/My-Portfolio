import React from 'react'

const LeftSider = () => {
    return (
        <div className='fixed left-0 bottom-0 px-10 autoShow sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                <a href='https://www.facebook.com/profile.php?id=100015183348864'>
                    <i className="ri-facebook-box-fill text-gray-500 text-xl"></i>
                </a>

                <a href='https://www.instagram.com/mehr7619?igsh=OGczczByYmV4a2tw'>
                    <i className="ri-instagram-fill text-gray-500 text-xl"></i>
                </a>

                <a href='adnanhaider4878@gmail.com'>
                    <i className="ri-mail-line text-gray-500 text-xl"></i>
                </a>

                <a href='https://www.linkedin.com/in/adnanhaider21421525/?profileId=ACoAADGqUvsBgOE9vZDp25mtgGaUoHUwPgnsCu4'>

                    <i className="ri-linkedin-box-fill text-gray-500 text-xl"></i>
                </a>

                <a href='https://github.com/AdnanMehr8'>
                    <i className="ri-github-fill text-gray-500 text-xl"></i>
                </a>

                </div>

                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

                </div>
            </div>
        </div>
    );
}

export default LeftSider