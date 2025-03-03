import React from 'react';

const ExclusiveTravelBanner = () => {
    return (
        <div>
            <div className="hero bg-blue-500 rounded-md">
                <div className="hero-content text-center my-10">
                    <div className="px-60 text-white">
                    <h1 className="text-4xl font-bold">See the World Differently - Sign Up for Exclusive Travel Insights!</h1>
                     <div className='px-10 mt-6'>
                     <input type="text" placeholder="Enter Your Email" className="bg-blue-500 text-white border rounded-md p-3 w-1/2" />
                     <button className='bg-white text-black py-3 px-10 rounded-md text-lg font-bold ml-2'>Subscribe</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveTravelBanner;