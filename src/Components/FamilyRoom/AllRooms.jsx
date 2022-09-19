import React from 'react';
import Room from './Room';

const AllRooms = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <div className='flex items-center justify-end py-[73px] gap-x-[45px]'>
                <img src="/images/icon/grid.svg" alt="" />
                <img src="/images/icon/list.svg" alt="" />
            </div>
            <div className='grid grid-cols-3 gap-[73px]'>
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
            </div>
            <div className='py-[60px] flex items-center gap-x-[12px] justify-center'>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
                <span className='h-[14px] w-[14px] rounded-full bg-secondary'></span>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
            </div>
        </div>
    );
};

export default AllRooms;