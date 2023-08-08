import React from 'react';
import Header from './components/Header';
import './Styles/App.css';

import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import ProyectWeRun from './components/ProyectWeRun';
import NikePegasus from './components/NikePegasus';

function App() {
  return (
    <div className='Container'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <NikePegasus/>
      <SectionFour />
      <ProyectWeRun/>
    </div>
  );
}

export default App;