import React from 'react';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default Home;