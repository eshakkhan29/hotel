import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#0B0D17] py-[120px]'>
            <div className='grid grid-cols-4 gap-x-[50px] lg:w-8/12 mx-auto px-2 lg:px-0'>
                <div>
                    <img src="/images/logo/hotel logo.png" alt="" />
                    <p className='text-[#D9DBE1] text-base font-normal mt-[16px]'>Lorem ipsum dolor sit amet, consectetur</p>
                    <div className='mt-[24px] flex items-center gap-x-[12px]'>
                        <Link className='h-[32px] w-[32px] rounded-full bg-[#ffffff33] flex items-center justify-center' to='/'><BsInstagram className='text-white text-lg' /></Link>
                        <Link className='h-[32px] w-[32px] rounded-full bg-[#ffffff33] flex items-center justify-center' to='/'><RiFacebookBoxLine className='text-white text-lg' /></Link>
                        <Link className='h-[32px] w-[32px] rounded-full bg-[#ffffff33] flex items-center justify-center' to='/'><FiYoutube className='text-white text-lg' /></Link>
                        <Link className='h-[32px] w-[32px] rounded-full bg-[#ffffff33] flex items-center justify-center' to='/'><FaTwitter className='text-white text-lg' /></Link>
                    </div>
                    <input className='mt-[30px] bg-[#ffffff33] text-white placeholder:text-white rounded-[5px] outline-none py-[8px] pl-[10px] pr-[80px]' type="text" placeholder='Your email address' />
                </div>
                <div>
                    <h2 className='text-white text-[22px] font-bold'>Usefull Link</h2>
                    <div className='mt-[13px] flex flex-col gap-y-[15px] text-white'>
                        <Link to='/'>Gallery</Link>
                        <Link to='/'>Blogs</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Image</Link>
                        <Link to='/'>Rooms</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-[22px] font-bold'>Services</h2>
                    <div className='mt-[13px] flex flex-col gap-y-[15px] text-white'>
                        <Link to='/'>Restaurant</Link>
                        <Link to='/'>Coffee Shop</Link>
                        <Link to='/'>Car Wash</Link>
                        <Link to='/'>Cycle Rent</Link>
                        <Link to='/'>Car Rent</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-[22px] font-bold'>Reach Us</h2>
                    <div className='flex flex-col gap-y-[31px] mt-[13px]'>
                        <div className='flex items-center gap-x-[20px]'>
                            <img src="/images/icon/Message.svg" alt="" />
                            <p className='text-white'>6391 Elgin St.</p>
                        </div>
                        <div className='flex items-center gap-x-[20px]'>
                            <img src="/images/icon/Mobile.svg" alt="" />
                            <p className='text-white'>(239) 555-0108</p>
                        </div>
                        <div className='flex items-start gap-x-[20px]'>
                            <img src="/images/icon/Location.svg" alt="" />
                            <p className='text-white'>6391 Elgin St. Celina, Delaware 10299</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;