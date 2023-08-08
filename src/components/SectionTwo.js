import React from 'react';
import '../Styles/SectionTwo.css';

import SocialMedia from './SocialMedia';


const SectionTwo = () => {

    return (
        <div className='sectionTwo'>
            <div className='container'>
                <SocialMedia/>
                <div className='flex-textMedia'>
                    <h1 className='sent-sectionTwo'>Create and customize your WeRun in minutes</h1>
                    <p className='text-sectionTwo'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert..</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;