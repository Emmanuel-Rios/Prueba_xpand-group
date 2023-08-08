import React from 'react';
import '../Styles/SectionOne.css';

import ZapatosNike from '../Images/Image-SectionOne-2.png';

import PopUp from './PopUp';

const SectionOne = () => {

    return (
        <div className='sectionOne'>
            <div className='box-sectionOne'>
                <h1 className='sent-SectionOne'>Let's run together into the future.</h1>
                <p className='text-SectionOne'>Running together toward the future is more than just a race, it is an exciting adventure that propels us toward new horizons. When we join forces and souls.</p>
                <PopUp/>
            </div>
            <img src={ZapatosNike} alt="Run away" className="image" id="img" />
        </div>
    );
};

export default SectionOne;