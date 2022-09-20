import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-4 gap-x-[32px] gap-y-[64px] lg:w-8/12 mx-auto'>
            <div onClick={() => navigate(`/Services/Restaurant`)} className='cursor-pointer bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/resturant.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Restaurant</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/transport.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Transport Facility</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/spa.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Spa & Sallon</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/wifi.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Free Wifi</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/sweming.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Swimming Pool</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/bar.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Mini Bar</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/confarench.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Conference Room</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className='bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] py-[15px] px-[23px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src="/images/icon/game.svg" alt="" />
                </div>
                <h2 className='text-primary text-[24px] font-bold mt-[19px]'>Game Room</h2>
                <p className='text-neutral text-base font-light mt-[26px]'>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    );
};

export default Services;