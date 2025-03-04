import React from 'react';

const SharedBanner = ({heading1,heading2,subHeading}) => {
    return (
        <div className='bg-gray-200 text-center py-12 rounded-lg mb-10'>
            <h2 className='font-bold lg:text-4xl md:text-3xl text-2xl mb-2'><span className='text-blue-500 mr-4'>{heading1}</span>{heading2}</h2>
            <p className='opacity-75'>{subHeading}</p>
        </div>
    );
};

export default SharedBanner;