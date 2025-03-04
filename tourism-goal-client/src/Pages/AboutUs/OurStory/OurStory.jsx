import React from 'react';
import SharedBanner from '../../../Shared/SharedBanner/SharedBanner';
import Ads1 from '../../../Shared/AdsSection/Ads1';
import img1 from '../../../assets/OurImage/ourImage1.png'
import img2 from '../../../assets/OurImage/ourImage2.png'
import img3 from '../../../assets/OurImage/ourImage3.png'
import ExclusiveTravelBanner from '../../../Shared/ExclusiveTravelBanner/ExclusiveTravelBanner';

const OurStory = () => {
    return (
        <div>
            <SharedBanner heading1={'Our'} heading2={'Story'} subHeading={'Lorem ipsum dolor sit amet consectetur. Imperdiet phasellus at gravida habitant sagittis.'}></SharedBanner>
            <img className="w-full object-cover rounded-lg" src={img1} alt="" />
            <div className='lg:mx-0 md:mx-10 mx-4'>
                <h2 className='font-bold text-2xl lg:my-8 md:my-8 my-4'>Our Story</h2>
                <div className='lg:mb-16 md:mb-12 mb-10'>
                    <p className='text-justify mb-4 opacity-75'>This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).</p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                    <img className='rounded-lg' src={img2} alt="" />
                    <img className='rounded-lg' src={img3} alt="" />
                </div>
                <h2 className='font-bold text-2xl lg:my-8 md:my-8 my-4'>Why Should Yoy Choose Us</h2>
                <div className='lg:mb-16 md:mb-12 mb-10'>
                    <p className='text-justify mb-4 opacity-75'>This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).This User contract and Privacy Policy map control each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast (each, a “Information”) provided by Tourismgoal , Inc and its assistants and/or affiliates (“we,” “us,” or “our”) that links to this User contract and Policy map , which is compulsory on all those who access, visit and/or use the service, whether acting as an individual or on behalf of an entity, including you and all persons, entities, or digital engines of any kind that index, crawl, harvest, scrape, spider, or mine digital content by an automated or manual process or otherwise (collectively, “you” or “your”).</p>
                </div>
            </div>
            <Ads1></Ads1>
            <ExclusiveTravelBanner></ExclusiveTravelBanner>
        </div>
    );
};

export default OurStory;