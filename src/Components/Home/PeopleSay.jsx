import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const PeopleSay = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <div className='grid grid-cols-3 gap-x-[30px]'>
                <div>
                    <div className='p-[27px] relative bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] text-center'>
                        <p className='text-neutral text-base font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                        <div className='mt-[30px] text-2xl flex items-center justify-center text-secondary gap-x-[8px]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                        </div>
                        <img className='absolute left-1/2 -bottom-[24px] -translate-x-2/4' src="/images/icon/down-arow.svg" alt="" />
                    </div>
                    <div className='text-center mt-[55px]'>
                        <img className='mx-auto w-[56px] h-[56px] rounded-full' src="/images/clients/client (1).png" alt="" />
                        <h3 className='mt-[8px] text-base font-bold'>Jane Cooper</h3>
                        <p className='mt-[8px] text-base font-light text-[#474A57]'>@Jane Cooper</p>
                    </div>
                </div>
                <div>
                    <div className='p-[27px] relative bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] text-center'>
                        <p className='text-neutral text-base font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                        <div className='mt-[30px] text-2xl flex items-center justify-center text-secondary gap-x-[8px]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                        </div>
                        <img className='absolute left-1/2 -bottom-[24px] -translate-x-2/4' src="/images/icon/down-arow.svg" alt="" />
                    </div>
                    <div className='text-center mt-[55px]'>
                        <img className='mx-auto w-[56px] h-[56px] rounded-full' src="/images/clients/client (3).png" alt="" />
                        <h3 className='mt-[8px] text-base font-bold'>Esther Howard</h3>
                        <p className='mt-[8px] text-base font-light text-[#474A57]'>@Esther Howard</p>
                    </div>
                </div>
                <div>
                    <div className='p-[27px] relative bg-white shadow-[2px_0px_8px_rgba(0,0,0,0.15),0px_2px_8px_rgba(0,0,0,0.15)] text-center'>
                        <p className='text-neutral text-base font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                        <div className='mt-[30px] text-2xl flex items-center justify-center text-secondary gap-x-[8px]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStar />
                        </div>
                        <img className='absolute left-1/2 -bottom-[24px] -translate-x-2/4' src="/images/icon/down-arow.svg" alt="" />
                    </div>
                    <div className='text-center mt-[55px]'>
                        <img className='mx-auto w-[56px] h-[56px] rounded-full' src="/images/clients/client (2).png" alt="" />
                        <h3 className='mt-[8px] text-base font-bold'>Kathryn Murphy</h3>
                        <p className='mt-[8px] text-base font-light text-[#474A57]'>@Kathryn Murphy</p>
                    </div>
                </div>
            </div>
            <div className='py-[60px] flex items-center gap-x-[12px] justify-center'>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
                <span className='h-[14px] w-[14px] rounded-full bg-secondary'></span>
                <span className='h-[8px] w-[8px] rounded-full bg-secondary'></span>
            </div>
        </div>
    );
};

export default PeopleSay;