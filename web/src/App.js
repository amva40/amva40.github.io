import React from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Map from './pages/Map';
import CapsuleVideo from './pages/CapsuleVideo';
import Streaming from './pages/Streaming';
import Footer from './components/Footer';

export default function App() {
    const [isLoading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState('map-initial');

    return (
        <>
            <Loader isActive={isLoading} />
            {!isLoading && <Header onClick={setCurrentPage} currentPage={currentPage} />}
            <Map
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setLoading={setLoading}
            />
            {currentPage === 'capsule-video' && <CapsuleVideo />}
            {currentPage === 'streaming' && <Streaming />}
            {!isLoading && <Footer currentPage={currentPage} />}
        </>
    );
}
