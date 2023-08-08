import React from 'react';
import '../Styles/NikePegasus.css';

import Logo from '../Images/LogoNikePegaso.png';

const NikePegasus = () => {
  const nikeDateBogota = [
    { name: 'Nike Store Calle 82', ciudad: 'BOGOTÁ', link: 'https://www.google.com/maps/place/Nike+Store/@4.6668873,-74.0546586,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9af5449e6bad:0xead6767acb510c3f!8m2!3d4.6668873!4d-74.0546586!16s%2Fg%2F1td77mk9?coh=164777&entry=tt&shorturl=1' },
    { name: 'Nike Store Parque Colina', ciudad: 'BOGOTÁ', link: 'https://www.google.com/maps/place/Nike+Store/@4.7322142,-74.0704009,17z/data=!4m7!3m6!1s0x8e3f85fe99686c6b:0xfe1c0be4b71a5f80!8m2!3d4.7322142!4d-74.066281!15sChtOaWtlIFN0b3JlIHBhcnVxZSBsYSBjb2xpbmFaHSIbbmlrZSBzdG9yZSBwYXJ1cWUgbGEgY29saW5hkgEUc3BvcnRpbmdfZ29vZHNfc3RvcmXgAQA!16s%2Fg%2F11dxn1ltws?coh=164777&entry=tt&shorturl=1' },
    { name: 'Nike Store Gran Estación', ciudad: 'BOGOTÁ', link: 'https://www.google.com/maps/place/Nike/@4.6479354,-74.1014738,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b9544665abd:0x49d18d3be6bd25bb!8m2!3d4.6479354!4d-74.1014738!16s%2Fg%2F1ptw69pk0?entry=ttu' },
    { name: 'Nike Store C.C Santafe', ciudad: 'BOGOTÁ', link: 'https://www.google.com/maps/place/Nike+Store/@4.7624616,-74.0487249,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f8593ed8ebd33:0xb16af0207ce76c38!8m2!3d4.7624563!4d-74.0465362!16s%2Fg%2F1tg5d4gb?coh=164777&entry=tt&shorturl=1' }
  ]

  const nikeDateMedellin = [
    { name: 'Nike Store Viva Envigado', ciudad: 'MEDELLÍN', link: 'https://www.google.com/maps/place/Nike+Store/@6.1760514,-75.5937808,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468360efce7433:0x954a4d805098f4a!8m2!3d6.1760461!4d-75.5915921!16s%2Fg%2F11h8jbs8m4?coh=164777&entry=tt&shorturl=1' },
    { name: 'Nike Store C.C El Tesoro', cuidad: 'MEDELLÍN', link: 'https://www.google.com/maps/place/Nike+Store+El+Tesoro/@6.1976721,-75.5648601,17z/data=!3m1!4b1!4m6!3m5!1s0x8e46829a6cfb410b:0x7e88e9ccde4253cd!8m2!3d6.1976668!4d-75.5606329!16s%2Fg%2F11bycjjrrr?coh=164777&entry=tt&shorturl=1' },
    { name: 'Nike Store C.C Santafé', cuidada: 'MEDELLÍN', link: 'https://www.google.com/maps/place/Nike+Rise+Santaf%C3%A9+Medellin/@6.196193,-75.5760048,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468262aaf4a90f:0xd0857d48fd45a415!8m2!3d6.1961877!4d-75.5738161!16s%2Fg%2F1pty5b8qz?coh=164777&entry=tt&shorturl=1' }
  ]

  return (
    <div className='container-nike'>
      <div className='container-nikePegasus'>
        <img className='logo-nike' src={Logo}></img>
        <h4 className='tittle'>Nike Pegasus 40</h4>
        <h4 className='tittle2'>Siéntelo para creerlo. Disponible en Nike Store.</h4>
        <h1 className='tittle-city'>BOGOTÁ</h1>
        {nikeDateBogota.map((row, key) => (
          <a className='link' target="_blank" href={row.link}>{row.name}</a>
        ))}
         <h1 className='tittle-city'>MEDELLÍN</h1>
        {nikeDateMedellin.map((row, key) => (
          <a className='link' target="_blank" href={row.link}>{row.name}</a>
        ))}
      </div>
    </div>
  );
}
export default NikePegasus;