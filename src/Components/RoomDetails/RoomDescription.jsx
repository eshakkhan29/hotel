import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDescription = () => {
    const { path } = useParams();
    console.log(path)
    return (
        <div className='mt-[56px] lg:w-8/12 mx-auto px-2 lg:px-0'>
            <p className='text-neutral font-medium'>Room Size: <span className='font-normal'>50ft</span></p>
            <p className='mt-[8px] text-neutral font-medium'>Location: <span className='font-normal'>5th floor</span></p>
            <p className='mt-[8px] text-neutral font-medium'>Bed : <span className='font-normal'>2 double bed</span></p>
            <p className='mt-[8px] text-neutral font-medium'>View: <span className='font-normal'>Panama Sea view</span></p>
            <p className='mt-[8px] text-neutral font-medium'>Smoking: <span className='font-normal'>Yes</span></p>
            <p className='mt-[20px] text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit, molestie sollicitudin sit ultrices arcu vitae nam tellus. Lacus justo, ut ut id turpis. Arcu vitae eget dignissim etiam nunc felis purus ut. Pellentesque aenean quis ipsum, tellus nam condimentum cras. Arcu dolor morbi mauris malesuada elit a. Nunc, commodo eu at amet euismod vulputate a dictum. Placerat sagittis, laoreet odio ipsum hendrerit. Sed pharetra eu maecenas elit neque nullam. Tristique ligula hendrerit luctus enim. Mauris ut lacus sit ac eu consequat </p>
            <img className='my-[20px]' src="/images/icon/comma.svg" alt="" />
            <p className='mt-[20px] text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit, molestie sollicitudin sit ultrices arcu vitae nam tellus. Lacus justo, ut ut id turpis. Arcu vitae eget dignissim etiam nunc felis purus ut. Pellentesque aenean quis ipsum, tellus nam condimentum cras. Arcu dolor morbi mauris malesuada elit a. Nunc, commodo eu at amet euismod vulputate a dictum. Placerat sagittis</p>
        </div>
    );
};

export default RoomDescription;