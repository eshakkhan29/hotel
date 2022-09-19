import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <div className='py-[54px]'>
                <Link className='mr-[30px] font-medium text-base' to='/'>ALL</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Room</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Lobby</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Reception</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Dining</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Pool</Link>
                <Link className='mr-[30px] font-light text-base' to='/'>Spa</Link>
            </div>
            <div className='grid grid-cols-3 gap-[20px]'>
                <div className='row-span-2'>
                    <img className='w-full h-full' src="/images/gallary/gallary (2).png" alt="" />
                </div>
                <div className='col-span-2'>
                    <img className='w-full h-full' src="/images/gallary/gallary (1).png" alt="" />
                </div>
                <div>
                    <img className='w-full h-full' src="/images/gallary/gallary (7).png" alt="" />
                </div>
                <div className='row-span-2'>
                    <img className='w-full h-full' src="/images/gallary/gallary (6).png" alt="" />
                </div>
                <div className='col-span-2 row-span-2'>
                    <img className='w-full h-full' src="/images/gallary/gallary (5).png" alt="" />
                </div>
                <div>
                    <img className='w-full h-full' src="/images/gallary/gallary (4).png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;