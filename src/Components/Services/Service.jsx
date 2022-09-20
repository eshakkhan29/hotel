import React from 'react';

const Service = () => {
    return (
        <div className='cursor-pointer bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
            <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                <img src="/images/icon/resturant.svg" alt="" />
            </div>
            <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Restuarant</h2>
            <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    );
};

export default Service;