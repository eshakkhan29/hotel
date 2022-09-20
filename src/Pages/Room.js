import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import FamilyRoom from '../Components/FamilyRoom/FamilyRoom';
import BookingForm from '../Components/utility/BookingForm';
import Footer from '../Components/utility/Footer';
import PageBanner from '../Components/utility/PageBanner';
import SectionHeading from '../Components/utility/SectionHeading';

const Room = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-bold text-secondary'>Room</h1>
            </PageBanner>
            <div className='flex items-center justify-between py-[67px] lg:w-8/12 mx-auto px-2 lg:px-0'>
                <h1 className='text-[37px] text-[#3B5E8C] font-medium'>Family Room</h1>
                <h2 className='text-[37px] font-medium'><span className='text-[#3B5E8C]'>Price</span> <span className='text-secondary'>:</span> <span className='text-[#3B5E8C]'>799$</span> <span className='text-sm text-secondary'>night</span></h2>
            </div>
            <div className='lg:w-8/12 mx-auto px-2 lg:px-0 flex gap-x-[30px]'>
                <div className='lg:w-8/12'>
                    <div className='bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] p-[5px] rounded-[5px]'>
                        <img className='w-full' src="/images/roomDetails/room details (1).png" alt="" />
                    </div>
                    <div className='mt-[30px] flex items-center justify-between'>
                        <div className='w-[185px] h-[185px] bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] p-[5px] rounded-[5px]'>
                            <img className='w-full rounded-[5px]' src="/images/roomDetails/room details (3).png" alt="" />
                        </div>
                        <div className='w-[185px] h-[185px] bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] p-[5px] rounded-[5px]'>
                            <img className='w-full rounded-[5px]' src="/images/roomDetails/room details (4).png" alt="" />
                        </div>
                        <div className='w-[185px] h-[185px] bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] p-[5px] rounded-[5px]'>
                            <img className='w-full rounded-[5px]' src="/images/roomDetails/room details (5).png" alt="" />
                        </div>
                        <div className='w-[185px] h-[185px] bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] p-[5px] rounded-[5px]'>
                            <img className='w-full rounded-[5px]' src="/images/roomDetails/room details (6).png" alt="" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-[70px]'>
                        <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-medium text-neutral" : "text-[22px] text-[#747474]")} to='Description'>Description</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-medium text-neutral" : "text-[22px] text-[#747474]")} to='Information'>Additional Information</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-medium text-neutral" : "text-[22px] text-[#747474]")} to='Review'>Review</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-medium text-neutral" : "text-[22px] text-[#747474]")} to='Pricing'>Pricing Plans</NavLink>
                    </div>
                </div>
                <div className='lg:w-4/12'>
                    <BookingForm customClass={'flex-col gap-y-[40px]'} space={'pt-[75px] pb-[85px] px-[40px]'} />
                    <img className='mt-[30px] w-full' src="/images/roomDetails/room details (2).png" alt="" />
                </div>
            </div>
            <Outlet />
            <div className='py-[60px]'>
                <SectionHeading title1={'Our'} title2={'Room'} />
            </div>
            <FamilyRoom />
            <Footer />
        </>
    );
};

export default Room;