import React from 'react';
import { useSpring, animated } from 'react-spring';
import Capsule from '../assets/videos/capsule.webm';
import './CapsuleVideo.scss';

export default function CapsuleVideo() {
    const boxAnimation = useSpring({
        opacity: 1,
        from: {
            opacity: 0,
        },
    });

    return (
        <animated.div className="capsule-video" style={boxAnimation}>
            <video src={Capsule} autoPlay={true} loop={true} />
        </animated.div>
    );
}
