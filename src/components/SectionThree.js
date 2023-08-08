import React, { useState, useEffect } from 'react';

import '../Styles/SectionThree.css';

import Slider1 from '../Images/SliderUno.png';
import Slider2 from '../Images/SliderDos.png';
import Slider3 from '../Images/SliderTres.png';
import Slider4 from '../Images/SliderCuatro.png';
import Slider5 from '../Images/SliderCinco.png';
import Slider6 from '../Images/SliderSeis.png';
import Slider7 from '../Images/SliderSiete.png';

const SectionThree = () => {
    const slides = [
        { image: Slider1, alt: 'Slide 1' },
        { image: Slider2, alt: 'Slide 2' },
        { image: Slider3, alt: 'Slide 3' },
        { image: Slider4, alt: 'Slide 4' },
        { image: Slider5, alt: 'Slide 5' },
        { image: Slider6, alt: 'Slide 6' },
        { image: Slider7, alt: 'Slide 7' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Cambiar de diapositiva cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='box-slider'>
            <div className="slider-container">
                <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt={slide.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionThree;