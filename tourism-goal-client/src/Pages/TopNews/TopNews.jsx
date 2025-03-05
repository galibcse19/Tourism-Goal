import React from 'react';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Categories from '../../Shared/Categories/Categories';
import Ads1 from '../../Shared/AdsSection/Ads1';
import Ads3 from '../../Shared/AdsSection/Ads3';
import Calendar from './Calendar/Calendar';

const TopNews = () => {
    return (
        <div>
            <SharedBanner heading1={'Top'} heading2={'News'} subHeading={'Latest Travel Trends, Hidden Gems & Must-Know Updates'}></SharedBanner>
            <Categories></Categories>
            <Ads1></Ads1>
            <Calendar></Calendar>
            <Ads3></Ads3>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default TopNews;