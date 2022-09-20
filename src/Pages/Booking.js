import React from 'react';
import Footer from '../Components/utility/Footer';
import PageBanner from '../Components/utility/PageBanner';

const Booking = () => {
    return (
        <>
            <PageBanner>
                <h1 className='text-[37px] font-bold text-secondary'>Booking</h1>
            </PageBanner>
            <div className='my-[120px] lg:w-8/12 mx-auto px-2 lg:px-0 bg-gradient-to-b from-[#0083ca33] to-[#0083ca1a] shadow-[0px_2px_8px_rgba(0,0,0,0.25)] rounded-[5px] flex gap-x-[44px]'>
                <div className='lg:w-4/12 p-[8px]'>
                    <img className='w-full h-full rounded-[5px]' src="/images/family room/familyRoom  (3).png" alt="" />
                </div>


                <div className='lg:w-8/12 px-[16px] py-[19px]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[37px] text-primary font-medium'>Family Room</h1>
                        <span className='py-[11px] px-[52px] bg-primary text-white font-black text-[22px] rounded-[5px]'>$799</span>
                    </div>
                    <div className='px-[56px]'>
                        <table className='mt-[44px] border-collapse w-full rounded-[5px] text-center'>
                            <tbody>
                                <tr className=''>
                                    <td className='border border-secondary font-black text-neutral text-[22px] py-[22px]'>Check in time</td>
                                    <td className='border border-secondary font-black text-neutral text-[22px] py-[22px]'>Check out time</td>
                                    <td className='border border-secondary font-black text-neutral text-[22px] py-[22px]'>Guest</td>
                                </tr>
                                <tr>
                                    <td className='border border-secondary font-bold text-base py-[25px]'>12-30 pm</td>
                                    <td className='border border-secondary font-bold text-base py-[25px]'>12-30 pm</td>
                                    <td className='border border-secondary font-bold text-base py-[25px]'>4</td>
                                </tr>
                                <tr>
                                    <td className='border border-secondary font-bold text-base py-[25px]'>09/03/2021</td>
                                    <td className='border border-secondary font-bold text-base py-[25px]'>12/03/2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='text-end mt-[18px]'>
                        <button className='text-white bg-secondary py-[12px] px-[47px] text-base font-normal rounded-[5px]'>Confirm</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;