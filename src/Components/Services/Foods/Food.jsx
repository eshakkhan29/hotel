import React from 'react';

const Food = () => {
    return (
        <div className='bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.25),0px_2px_8px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center'>
                <img className='p-[10px]' src="/images/foodItem/food (1).png" alt="" />
                <div className='p-[30px]'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-neutral text-[22px] font-medium'>Coffe................. </h2>
                        <h3 className='text-neutral text-[22px] font-medium'>Price : 20$</h3>
                    </div>
                    <p className='mt-[46px] text-neutral text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default Food;