import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/utility/Footer';
import PageBanner from '../Components/utility/PageBanner';
import ServiceIntroduction from '../Components/utility/ServiceIntroduction';

const ServicePage = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-bold text-secondary'>Service</h1>
            </PageBanner>
            <div className='pt-[120px]'>
                <ServiceIntroduction
                    img={'/images/pageImage/restuarant.png'}
                    name={'Restuarant'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='pt-[58px]'>
                <ServiceIntroduction
                    order={'flex-row-reverse'}
                    img={'/images/pageImage/salad.png'}
                    name={'Salad'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='py-[58px]'>
                <ServiceIntroduction
                    img={'/images/pageImage/stack .png'}
                    name={'Stack'}
                    text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'}
                    text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna.'} />
            </div>
            <div className='flex items-center justify-between mt-[58px] lg:w-8/12 mx-auto px-2 lg:px-0'>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Breakfast'>Breakfast Foods</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Seafood'>Meat and Seafood</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Rice'>Pasta and Rice</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Frozen'>Frozen Foods</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Sauces'>Sauces</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[22px] font-bold text-neutral" : "text-[22px] font-bold text-[#747474]")} to='Oils'>Oils</NavLink>
            </div>
            <div className='mt-[73px] mb-[120px]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default ServicePage;