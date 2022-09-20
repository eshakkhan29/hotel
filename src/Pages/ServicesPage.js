import React from 'react';
import PageBanner from '../Components/utility/PageBanner';
import ServiceIntroduction from '../Components/utility/ServiceIntroduction';
import Services from '../Components/Services/Services';
import Footer from '../Components/utility/Footer';

const ServicesPage = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-bold text-secondary'>Services</h1>
            </PageBanner>
            <div className='pt-[120px]'>
                <ServiceIntroduction
                    img={'/images/pageImage/services.png'}
                    name={'Services'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='py-[58px]'>
                <ServiceIntroduction
                    order={'flex-row-reverse'}
                    img={'/images/pageImage/reception.png'}
                    name={'Reception'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='mb-[120px]'>
                <Services />
            </div>
            <Footer/>
        </>
    );
};

export default ServicesPage;