import React from 'react';
import StreamingTest from '../assets/videos/streaming_test.mp4';
import CapsuleGif from '../assets/videos/capsule_gif.mp4';
import './Streaming.scss';

export default function Streaming() {
    return (
        <div className="streaming">
            <video src={StreamingTest} autoPlay muted loop className="streaming" />
            <video src={CapsuleGif} autoPlay muted loop className="capsule" />
        </div>
    );
}
