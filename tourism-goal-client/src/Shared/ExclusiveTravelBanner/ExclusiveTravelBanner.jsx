import React from 'react';

const ExclusiveTravelBanner = () => {
    return (
        <div>
            <div className="hero bg-blue-500 rounded-md">
                <div className="hero-content text-center my-10">
                    <div className="lg:px-60 text-white">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-bold">See the World Differently - Sign Up for Exclusive Travel Insights!</h1>
                     <div className='lg:px-10 md:px-10 mt-6'>
                     <input type="text" placeholder="Enter Your Email" className="bg-blue-500 text-white border rounded-md lg:p-3 md:p-3 p-2 w-1/2" />
                     <button className='bg-white text-black lg:py-3 lg:px-10 md:py-3 md:px-10 py-2 px-4 rounded-md text-lg font-bold ml-2'>Subscribe</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveTravelBanner;