import React from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from './Logo';
import './Header.scss';

export default function Header({
    onClick,
    currentPage,
}) {
    const boxAnimation = useSpring({
        top: '1rem',
        left: '1rem',
        from: {
            top: '-14rem',
            left: '-14rem',
        },
    });

    return (
        <animated.div className="header" style={boxAnimation}>
            <div className="top">
                <Logo scale={2} />
            </div>
            <div className="actions">
                {(currentPage !== 'map-amva' && currentPage !== 'map-initial') && (
                    <button onClick={() => onClick('map-amva')}>Área</button>
                )}
                {(currentPage === 'map-amva' || currentPage === 'map-initial') && (
                    <button onClick={() => onClick('map-capsule')}>Cápsula</button>
                )}
                {currentPage === 'capsule-video' && <button onClick={() => onClick('streaming')}>En vivo</button>}
            </div>
        </animated.div>
    );
}
