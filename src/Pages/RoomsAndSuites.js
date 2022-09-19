import React from 'react';
import AllRooms from '../Components/FamilyRoom/AllRooms';
import Footer from '../Components/utility/Footer';
import PageBanner from '../Components/utility/PageBanner';

const RoomsAndSuites = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-normal'><span className='text-[#3B5E8C]'>Our</span> <span className='text-secondary font-bold'>Rooms</span></h1>
            </PageBanner>
            <AllRooms/>
            <Footer />
        </>
    );
};

export default RoomsAndSuites;