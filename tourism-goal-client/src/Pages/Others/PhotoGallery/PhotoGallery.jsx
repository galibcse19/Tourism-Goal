import React from 'react';
import SharedBanner from '../../../Shared/SharedBanner/SharedBanner';
import Ads1 from '../../../Shared/AdsSection/Ads1';
import Ads3 from '../../../Shared/AdsSection/Ads3';
import ExclusiveTravelBanner from '../../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';

const PhotoGallery = () => {
    return (
        <div>
            <SharedBanner heading1={'Photo'} heading2={'Gallery'} subHeading={'Lorem ipsum dolor sit amet consectetur. Imperdiet phasellus at gravida habitant sagittis.'}></SharedBanner>
            <Ads1></Ads1>
            <Ads3></Ads3>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default PhotoGallery;