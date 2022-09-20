import React from 'react';
import FamilyRoom from '../Components/FamilyRoom/FamilyRoom';
import Footer from '../Components/utility/Footer';
import PageBanner from '../Components/utility/PageBanner';
import SectionHeading from '../Components/utility/SectionHeading';
import ServiceIntroduction from '../Components/utility/ServiceIntroduction';

const AboutUs = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-bold text-secondary'>About US</h1>
            </PageBanner>
            <div className='pt-[120px]'>
                <ServiceIntroduction
                    img={'/images/pageImage/about.png'}
                    name={'About Us'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='pt-[58px]'>
                <ServiceIntroduction
                    order={'flex-row-reverse'}
                    img={'/images/pageImage/hotel.png'}
                    name={'Hotel'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='py-[60px]'>
                <SectionHeading title1={'Our'} title2={'Room'} />
            </div>
            <FamilyRoom />
            <Footer />
        </>
    );
};

export default AboutUs;