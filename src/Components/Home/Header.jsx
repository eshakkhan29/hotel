import Nav from '../utility/Nav';
import React from 'react';
import BookingForm from '../utility/BookingForm';

const Header = () => {


    return (
        <div style={{ backgroundImage: "url(/images/pageImage/banner.png)" }} className='h-screen bg-no-repeat bg-cover bg-center' >
            <Nav />
            <div className='lg:w-8/12 mx-auto lg:px-0 px-2 py-[200px]'>
                <h1 className='text-[64px] font-bold text-accent border-b-[3px] border-accent inline-block'>HOTEL</h1>
                <h2 className='mt-[40px] text-[64px] font-bold text-white'>Up to 60% OFF</h2>
                <h3 className='mt-[10px] text-[48px] font-normal text-white'>On Hotel Booking Online</h3>
                <button className='mt-[58px] py-[14px] px-[29px] text-white bg-accent rounded-[5px] text-base font-medium'>Booking Now</button>
            </div>
            <div className='relative bottom-[45px] lg:w-[1110px] mx-auto'>
                <BookingForm customClass={'items-center gap-x-[10px]'}/>
            </div>
        </div>
    );
};

export default Header;