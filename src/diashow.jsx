import board from './assets/tafel.jpg';
import board_pupil from './assets/schueler_tafel.jpg';
import equations from './assets/kreis_formel.jpg';
import { useState } from 'react';

function Diashow() {
    const images = [board, board_pupil, equations];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function handleClick() {
        setCurrentIndex((currentIndex + 1) % images.length);
    }
    
    return (
      <img 
        src={images[currentIndex]} 
        onClick={handleClick}
        alt="Unterrichtsbild"
      />
    );
}

export default Diashow;