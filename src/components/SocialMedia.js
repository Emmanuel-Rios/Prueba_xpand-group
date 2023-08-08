import React from 'react';
import '../Styles/SectionTwo.css';
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiYoutube, mdiLinkedin, mdiTwitch } from '@mdi/js';

const socialMedia = () => {
    return (
        <div className='flex-socialMedia'>
            <div className='social'>
                <Icon path={mdiTwitch} size={2} color="#530066" />
            </div>
            <div className='social'>
                <Icon path={mdiTwitter} size={2} color="#007BFF" />
            </div>
            <div className='social'>
                <Icon path={mdiLinkedin} size={2} color="#007BFF" />
            </div>
            <div className='social'>
                <Icon path={mdiFacebook} size={2} color="blue" />
            </div>
            <div className='social'>
                <Icon path={mdiYoutube} size={2} color="red" />
            </div>
        </div>
    );
}

export default socialMedia;