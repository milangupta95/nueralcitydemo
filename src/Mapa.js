import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css';
import {HeatmapLayer} from 'react-leaflet-heatmap-layer-v3';
import { geojson } from './heatmap';
function Mapa() {
    const position = [12.9716, 77.5946];
    let newgeojson = geojson.filter(geo => (parseFloat(geo.lat) >= 12.95) && parseFloat(geo.lon) >= 77.56 && parseFloat(geo.lat) <= 13.10 && parseFloat(geo.lon) <= 77.7);
    console.log(newgeojson);
    return (
        <div>
            <MapContainer
                className='full-height-map'
                center={position}
                zoom={15}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <HeatmapLayer
                    radius={10}
                    minOpacity={2}
                    fitBoundsOnLoad
                    fitBoundsOnUpdate
                    zoom = {15}
                    points={newgeojson}
                    longitudeExtractor={m => parseFloat(m.lon)}
                    latitudeExtractor={m => parseFloat(m.lat)}
                    intensityExtractor={m => parseFloat(m.avg_rating)}
                />
            </MapContainer>
        </div>
    )
}

export default Mapa