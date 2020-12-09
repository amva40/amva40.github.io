import React from 'react';
import Countdown from './Countdown';
import './Footer.scss';

const texts = {
    'map-amva': 'Con una línea que nos trazamos, acercamos territorios, culturas, diversidades, puntos <br/> de vista, sueños y personas. Cada punto es un foco de gestión que se une a través <br/> de la tecnología, la movilidad, el desarrollo y la conservación ambiental para articular un Futuro sostenible que no se detiene y crea calidad de vida.',
    'map-capsule': 'Las urnas del tiempo clásicas querían mostrar a generaciones futuras cómo era la vida años atrás; la "Cápsula Viva Observatorio de lo Invisible" viene del pasado y el futuro para decirnos que la llave del acertijo la tenemos hoy en nuestras manos.',
    'capsule-video': `“Tendemos a ignorar las cosas que son invisibles, ¿estás de acuerdo? 
    ¿Invisibles? 
    <br/> El clima es invisible y, sin embargo, nos afecta”, 
    “Pero la mejor manera de entender <br/> el silencio consiste en aceptar que no  
    existe, sino que es una medida a partir de la cual valoramos el sonido.” 
    Opus zero, Daniel G`
};

export default function Footer({ currentPage }) {
    return (
        <div className="footer">
            <div className="text" dangerouslySetInnerHTML={{ __html: texts[currentPage] }}/>
            <Countdown />
        </div>
    );
}
