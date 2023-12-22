import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import '../styles/Map.scss';

export default function YMap() {
    const position = [48.7882752, 2.3232512];

  return (
    <div className='map'>
        <MapContainer className='map_map' center={position} zoom={13}>
            <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution="<a href='https://carto.com/attribution'>Carto</a> [^5^][5]"
            />
            <Marker position={position}>
                <Popup>Alpha Map Ysport</Popup>
            </Marker>
        </MapContainer>
    </div>
  );
};
