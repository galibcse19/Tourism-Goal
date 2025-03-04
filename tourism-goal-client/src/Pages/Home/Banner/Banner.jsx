import React from 'react';

const Banner = () => {
    return (
        <div className='mb-10'>
            <div className="hero bg-gray-200 rounded-md">
                <div className="hero-content text-center my-10">
                    <div className="lg:px-60">
                    <h1 className="lg:text-md md:text-md text-sm tracking-[0.35em]">WELCOME TO TOURISM GOAL</h1>
                     <h2 className='my-2 font-bold lg:text-2xl md:text-2xl text-lg font-sans'><span className='text-blue-500'>পর্যটকের দুনিয়া</span>, পর্যটন সংবাদ আমাদের সঙ্গে </h2>
                     <p className='opacity-75'>Want to learn more about tourism and How to promote your destination to visitors? Tourismgoal - The leading source for tourism news and views and resources.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;