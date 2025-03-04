import React from 'react';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Ads3 from '../../Shared/AdsSection/Ads3';

const BooksNotes = () => {
    return (
        <div>
            <SharedBanner heading1={'Books'} heading2={'& Notes'} subHeading={'Lorem ipsum dolor sit amet consectetur. Imperdiet phasellus at gravida habitant sagittis.'}></SharedBanner>
            <Ads3></Ads3>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default BooksNotes;