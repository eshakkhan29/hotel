import React from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = ({ customClass }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='rounded-[5px] bg-primary py-[38px] px-[22px]'>
            <form className={`flex ${customClass}`} onSubmit={handleSubmit(onSubmit)}>
                <div className='bg-white rounded-[5px] py-[12px] px-[17px] flex items-center justify-between'>
                    <input className='w-full outline-none' onClick={(e) => e.target.type = 'date'} type='text' placeholder="Check in" {...register("Check in", {})} />
                    <img src="/images/icon/calander.png" className='w-[20px] h-[20px]' alt="" />
                </div>
                <div className='bg-white rounded-[5px] py-[12px] px-[17px] flex items-center justify-between'>
                    <input className='w-full outline-none' onClick={(e) => e.target.type = 'date'} type='text' placeholder="Check out" {...register("Check out", {})} />
                    <img src="/images/icon/calander.png" className='w-[20px] h-[20px]' alt="" />
                </div>
                <div className='bg-white rounded-[5px] py-[12px] px-[17px] flex items-center justify-between'>
                    <input className='outline-none w-full' type="number" placeholder="Adults " {...register("Adults ", {})} />
                    <img src="/images/icon/adults.png" className='w-[20px] h-[20px]' alt="" />
                </div>
                <div className='bg-white rounded-[5px] py-[12px] px-[17px] flex items-center justify-between'>
                    <input className='outline-none w-full' type="number" placeholder="Children " {...register("Children ", {})} />
                    <img src="/images/icon/children.png" className='w-[20px] h-[20px]' alt="" />
                </div>
                <input className='bg-accent cursor-pointer rounded-[5px] py-[12px] px-[38px] text-base font-normal text-white' type="submit" value='Booking Now' />
            </form>
        </div>
    );
};

export default BookingForm;