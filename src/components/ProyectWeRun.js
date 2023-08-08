import React from 'react';
import '../Styles/ProyectWeRun.css';
import Logo from '../Images/LogoProyectWeRun.png';


const ProyectWeRun = () => {


  const nikeDateMedellin = [
    { name: '🏃🏻‍♂️¡Inscríbete y entrenemos!', ciudad: 'MEDELLÍN', link: 'https://www.proyectowerun.com/' },
    { name: '📻 Voces de Victoria', cuidad: 'MEDELLÍN', link: 'https://api.whatsapp.com/send?phone=573212092394&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!' },
    { name: 'Nike Store Calle 82📍Bogotá', cuidada: 'MEDELLÍN', link: 'https://api.whatsapp.com/send?phone=573208576389&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!' },
    { name: 'Nike Store Santafé📍Medellín', cuidada: 'MEDELLÍN', link: 'https://api.whatsapp.com/send?phone=573134786372&text=%C2%A1Estoy%20interesado%20en%20productos%20NIKE!' },
    { name: 'Nike Store Santafé📍Medellín', cuidada: 'MEDELLÍN', link: 'https://www.sportline.com.pa/marcas/nike.html' },
    { name: 'Nike Store 📍 Panamá 🇵🇦', cuidada: 'MEDELLÍN', link: 'https://www.sportline.com.pa/marcas/nike.html' },
    { name: 'Nike Store 📍Guatemala 🇬🇹', cuidada: 'MEDELLÍN', link: 'https://www.sportline.com.gt/marcas/nike.html' }
  ]

  return (
    <div className='container-proyect'>
      <div className='container-proyectWeRun'>
        <img className='logo-proyect' src={Logo}></img>
        <h4 className='tittle-proyect'>proyectowerun</h4>
        <h4 className='tittle2-proyect'>🏃🏻 ¡Mira lo que tenemos para ti!</h4>
        {nikeDateMedellin.map((row, key) => (
          <a className='link-proyect' target="_blank" href={row.link}>{row.name}</a>
        ))}
      </div>
    </div>
  );
};
export default ProyectWeRun;