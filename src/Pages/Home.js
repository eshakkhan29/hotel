import React from 'react';
import FamilyRoom from '../Components/FamilyRoom/FamilyRoom';
import Gallery from '../Components/Gallery/Gallery';
import Header from '../Components/Home/Header';
import PeopleSay from '../Components/Home/PeopleSay';
import Services from '../Components/Services/Services';
import Footer from '../Components/utility/Footer';
import SectionHeading from '../Components/utility/SectionHeading';

const Home = () => {
    return (
        <>
            <Header />
            <div className='py-[100px]'>
                <SectionHeading title1={'Our'} title2={'Room'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.'} />
            </div>
            <FamilyRoom />
            <div className='relative lg:w-8/12 mx-auto lg:px-0 px-2'>
                <img className='w-full' src="/images/pageImage/service.png" alt="" />
                <img className='absolute top-2/4 left-2/4 cursor-pointer -translate-x-1/2 -translate-y-1/2' src="/images/icon/video.png" alt="" />
            </div>
            <div className='py-[68px]'>
                <SectionHeading title1={'Our'} title2={'Service'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.'} />
            </div>
            <Services />
            <div className='py-[68px]'>
                <SectionHeading title1={'Our'} title2={'Gallery'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.'} />
            </div>
            <Gallery />
            <div className='py-[68px]'>
                <SectionHeading title1={'What'} title2={'People Say'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.'} />
            </div>
            <PeopleSay />
            <Footer/>
        </>
    );
};

export default Home;