import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { RiFacebookBoxLine } from 'react-icons/ri';

const Nav = () => {
    return (
        <nav className='py-[10px] lg:w-8/12 mx-auto lg:px-0 px-2'>
            <div className="navbar">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
                            <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Rooms'>Rooms & Sultes</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Services'>Services</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/About-us'>About US</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Booking'>Booking</NavLink>
                        </ul>
                    </div>
                </div>
                {/* desktop */}
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Rooms'>Rooms & Suites</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Services'>Services</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/About-us'>About US</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-white text-base mr-[32px]" : "text-base text-[#C2C7CE] mr-[32px]")} to='/Booking'>Booking</NavLink>
                    </ul>
                </div>
                <div className='ml-auto'>
                    <Link className='h-[32px] w-[32px] rounded-full bg-[#60A3C8] flex items-center justify-center mr-[12px]' to='/'><BsInstagram className='text-white text-lg' /></Link>
                    <Link className='h-[32px] w-[32px] rounded-full bg-[#60A3C8] flex items-center justify-center mr-[12px]' to='/'><RiFacebookBoxLine className='text-white text-lg' /></Link>
                    <Link className='h-[32px] w-[32px] rounded-full bg-[#60A3C8] flex items-center justify-center mr-[12px]' to='/'><FiYoutube className='text-white text-lg' /></Link>
                    <Link className='h-[32px] w-[32px] rounded-full bg-[#60A3C8] flex items-center justify-center mr-[12px]' to='/'><FaTwitter className='text-white text-lg' /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;