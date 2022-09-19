import React from 'react';
import Room from './Room';

const FamilyRoom = () => {
    return (
        <>
            <div className='grid grid-cols-3 lg:w-8/12 mx-auto gap-[73px]'>
                <Room />
                <Room />
                <Room />
            </div>
            <div className='py-[60px] flex items-center gap-x-[12px] justify-center'>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
                <span className='h-[14px] w-[14px] rounded-full bg-secondary'></span>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
            </div>
        </>
    );
};

export default FamilyRoom;