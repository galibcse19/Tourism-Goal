import React from 'react';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Ads1 from '../../Shared/AdsSection/Ads1';

const Jobs = () => {
    return (
        <div>
            <SharedBanner heading1={'Career'} heading2={'/ Jobs'} subHeading={'Lorem ipsum dolor sit amet consectetur. Imperdiet phasellus at gravida habitant sagittis.'}></SharedBanner>
            <Ads1></Ads1>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default Jobs;