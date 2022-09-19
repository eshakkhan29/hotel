import React from 'react';

const SectionHeading = ({ title1, title2, text }) => {
    return (
        <div className='text-center'>
            <h1 className='text-[48px]'><span className='font-normal text-primary'>{title1} </span><span className='font-bold text-secondary'>{title2}</span></h1>
            <p className='text-[16px] font-light text-neutral mt-[20px] tracking-[0.03em] lg:w-[540px] mx-auto'>{text}</p>
        </div>
    );
};

export default SectionHeading;