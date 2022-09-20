import React from 'react';
import { useParams } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
    const {food} = useParams();
    console.log(food);
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0 grid grid-cols-2 gap-[30px]'>
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
            <div className='bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.25),0px_2px_8px_rgba(0,0,0,0.25)]'>
                <div className='flex items-center'>
                    <img className='p-[10px]' src="/images/foodItem/food (2).png" alt="" />
                    <div className='p-[30px]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-neutral text-[22px] font-medium'>Coffe................. </h2>
                            <h3 className='text-neutral text-[22px] font-medium'>Price : 20$</h3>
                        </div>
                        <p className='mt-[46px] text-neutral text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.25),0px_2px_8px_rgba(0,0,0,0.25)]'>
                <div className='flex items-center'>
                    <img className='p-[10px]' src="/images/foodItem/food (3).png" alt="" />
                    <div className='p-[30px]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-neutral text-[22px] font-medium'>Coffe................. </h2>
                            <h3 className='text-neutral text-[22px] font-medium'>Price : 20$</h3>
                        </div>
                        <p className='mt-[46px] text-neutral text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.25),0px_2px_8px_rgba(0,0,0,0.25)]'>
                <div className='flex items-center'>
                    <img className='p-[10px]' src="/images/foodItem/food (4).png" alt="" />
                    <div className='p-[30px]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-neutral text-[22px] font-medium'>Coffe................. </h2>
                            <h3 className='text-neutral text-[22px] font-medium'>Price : 20$</h3>
                        </div>
                        <p className='mt-[46px] text-neutral text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.25),0px_2px_8px_rgba(0,0,0,0.25)]'>
                <div className='flex items-center'>
                    <img className='p-[10px]' src="/images/foodItem/food (5).png" alt="" />
                    <div className='p-[30px]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-neutral text-[22px] font-medium'>Coffe................. </h2>
                            <h3 className='text-neutral text-[22px] font-medium'>Price : 20$</h3>
                        </div>
                        <p className='mt-[46px] text-neutral text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <Food/>
            <Food/>
            <Food/>
        </div>
    );
};

export default Foods;