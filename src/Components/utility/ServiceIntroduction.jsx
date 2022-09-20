import React from 'react';

const ServiceIntroduction = ({ img, name, text1, text2, order }) => {
    return (
        <div className={`lg:w-8/12 mx-auto px-2 lg:px-0 flex ${order} items-center gap-x-[30px]`}>
            <div className='lg:w-6/12'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='lg:w-6/12'>
                <h1 className='text-[37px] text-primary font-medium'>{name}</h1>
                <p className='mt-[24px] text-[#747474] text-base font-normal leading-[19px]'>{text1}</p>
                <img className='py-[18px]' src="/images/icon/comma.svg" alt="" />
                <p className='text-[#747474] text-base font-normal'>{text2}</p>
            </div>
        </div>
    );
};

export default ServiceIntroduction;