import React from 'react';
import StreamingTest from '../assets/videos/streaming_test.mp4';
import './Streaming.scss';

export default function Streaming() {
    const [streamingVideo, setStreamingVideo] = React.useState(null);
    const [canvasElement, setCanvasElement] = React.useState(null);
    const [canvasCtx, setCanvasCtx] = React.useState(null);
    const [videoActive, setVideoActive] = React.useState(false);

    React.useEffect(() => {
        if (streamingVideo) {
            streamingVideo.oncanplaythrough = () => {
                streamingVideo.play();
            };
        }
    }, [streamingVideo]);

    React.useEffect(() => {
        if (canvasElement && !canvasCtx) {
            setCanvasCtx(canvasElement.getContext('2d'));
        }
    }, [canvasElement, canvasCtx]);

    React.useEffect(() => {
        if (streamingVideo && canvasCtx && !videoActive) {
            setVideoActive(true);

            setInterval(() => {
                if (!streamingVideo.paused && !streamingVideo.ended) {
                    canvasCtx.drawImage(
                        streamingVideo,
                        0,
                        0,
                        canvasElement.width,
                        canvasElement.height,
                    );
                }
            }, 1000 / 60);
        }
    }, [streamingVideo, canvasCtx, canvasElement, videoActive]);

    return (
        <div className="streaming">
            <video src={StreamingTest} autoPlay muted loop="loop" ref={setStreamingVideo} />
            {streamingVideo && <canvas ref={setCanvasElement} />}
        </div>
    );
}
