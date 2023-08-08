import React from 'react';

import '../Styles/SectionFour.css';

import VideoYoutube from './VideoYoutube';

const SectionFour = (props) => {

    return (
        <div className='box-videoYoutube'>
            <div className='video'>
                <h1>Watch our video: <br></br>Voces de Victoria: Juan José Florián "Mochoman"</h1>
                <VideoYoutube tituloVideo='Voces de Victoria: Juan José Florián "Mochoman"'/>
            </div>
        </div>
    );
};

export default SectionFour;

