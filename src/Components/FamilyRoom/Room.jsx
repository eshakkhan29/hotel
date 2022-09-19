import React from 'react';

const Room = () => {
    return (
        <div className='bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] shadow-[0px_2px_8px_rgba(0,0,0,0.25)] p-[10px] rounded-[5px]'>
            <div>
                <img className='w-full' src="/images/family room/familyRoom  (1).png" alt="" />
                <div className='relative bottom-[40px] px-[25px] flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="/images/icon/bad.png" alt="" />
                        <span className='text-white ml-2'>4Guest</span>
                    </div>
                    <div className='flex items-center'>
                        <img src="/images/icon/fit.png" alt="" />
                        <span className='text-white ml-2'>90Ft</span>
                    </div>
                </div>
            </div>
            <div className='mt-[10px] flex items-center justify-between'>
                <h2 className='text-[22px] text-primary font-black'>Family Room</h2>
                <span className='py-[4px] px-[14px] text-white font-bold bg-primary rounded-[5px]'>$799</span>
            </div>
            <p className='mt-[21px] text-neutral text-base font-light leading-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
            <p className='mt-[21px] mb-[10px] text-end text-secondary font-medium cursor-pointer'>Booking <img className='ml-3 inline' src="/images/icon/right arow.png" alt="" /></p>
        </div>
    );
};

export default Room;