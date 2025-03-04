import React from 'react';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Categories from '../../Shared/Categories/Categories';
import Ads1 from '../../Shared/AdsSection/Ads1';
import Ads2 from '../../Shared/AdsSection/Ads2';
import Ads3 from '../../Shared/AdsSection/Ads3';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Categories></Categories>
            <div className='lg:mx-0 md:mx-4 mx-4'>
                <Ads1></Ads1>
                <Ads2></Ads2>
                <Ads3></Ads3>
            </div>
            <Faq></Faq>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default Home;