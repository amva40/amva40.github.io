import React from 'react';
import * as states from '../states';
import DeckGL from '@deck.gl/react';
import ReactMapGL from 'react-map-gl';

// A.M.V.A. Layers
import LayerDEM from '../layers/LayerDEM';
import LayerAMVAArcs from '../layers/LayerAMVAArcs';

// Capsule Layers
import LayerCapsule from '../layers/LayerCapsule';
import LayerPlants from '../layers/LayerPlants';

// Marker Layer
import LayerMarker from '../layers/LayerMarker';

export default function Map({
    currentPage,
    setCurrentPage,
    setLoading,
}) {
    const [viewState, setViewState] = React.useState(states.INITIAL_STATE.view_state);
    const [layers, setLayers] = React.useState(states.INITIAL_STATE.layers);
    const [mapStyle, setMapStyle] = React.useState(states.INITIAL_STATE.map_style);
    const [mapLoaded, setMapLoaded] = React.useState(false);

    const inMap = currentPage === 'map-initial' || currentPage === 'map-amva' || currentPage === 'map-capsule';

    React.useEffect(() => {
        if (currentPage === 'map-initial') {
            if (mapLoaded) {
                setViewState(states.AMVA_STATE_270deg.view_state);
            }
        } else if (currentPage === 'map-amva') {
            setViewState(states.AMVA_STATE_270deg.view_state);
            setLayers(states.AMVA_STATE_270deg.layers);
            setMapStyle(states.AMVA_STATE_270deg.map_style);
        } else if (currentPage === 'map-capsule') {
            setViewState(states.CAPSULE_STATE.view_state);
            setLayers(states.CAPSULE_STATE.layers);
            setMapStyle(states.CAPSULE_STATE.map_style);
        }
    }, [currentPage, mapLoaded]);

    return (
        <div style={{ opacity: (mapLoaded && inMap) ? 1 : 0 }}>
            <DeckGL 
                initialViewState={viewState}
                layers={[
                    LayerAMVAArcs,
                    LayerDEM,
                    LayerCapsule,
                    LayerMarker,
                    LayerPlants
                ]}
                layerFilter={({ layer }) => {
                    if (inMap) {
                        for (const layer_id of layers) {
                            if (layer.id.toLowerCase().startsWith(layer_id)) {
                                return true;
                            }
                        }
                    }

                    return false;
                }}
                controller={true}
                getTooltip={({ object }) => {
                    if (object && inMap) {
                        if (object.id === 'layer_marker') {
                            return '¡Haz click aquí para ver la cápsula de cerca!';
                        } else if (object.id === 'layer_capsule') {
                            return '¡Haz click aquí para ver lo que ocurre dentro de la cápsula!';
                        }
                    }
                }}
                onClick={({ layer }) => {
                    if (layer && inMap) {
                        if (layer.id === 'layer_marker') {
                            setCurrentPage('map-capsule');
                            setViewState(states.CAPSULE_STATE.view_state);
                            setLayers(states.CAPSULE_STATE.layers);
                            setMapStyle(states.CAPSULE_STATE.map_style);
                        } else if (layer.id === 'layer_capsule') {
                            setCurrentPage('capsule-video');
                        }
                    }
                }}
            >
                <ReactMapGL
                    reuseMaps
                    mapStyle={mapStyle}
                    preventStyleDiffing={true}
                    onLoad={() => {
                        setMapLoaded(true);
                        setLoading(false);
                    }}
                />
            </DeckGL>
        </div>
    );
}
