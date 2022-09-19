import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const PageBanner = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: "url(/images/pageImage/pageBanner.png)" }}>
            <Nav />
            <div className='text-center pt-[70px] pb-[100px]'>
                {children}
                <p className='text-white font-light cursor-pointer'><span onClick={()=>navigate('/')}>Home</span> {location.pathname}</p>
            </div>
        </div>
    );
};

export default PageBanner;