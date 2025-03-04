import React from 'react';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import ExclusiveTravelBanner from '../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';
import Ads3 from '../../Shared/AdsSection/Ads3';

const GoalsToDo = () => {
    return (
        <div>
            <SharedBanner heading1={'Goals'} heading2={'To Do'} subHeading={'Lorem ipsum dolor sit amet consectetur. Imperdiet phasellus at gravida habitant sagittis.'}></SharedBanner>
            <Ads3></Ads3>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default GoalsToDo;