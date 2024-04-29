//Pour le moment la data et la map est dans le même fichier, mais il sera séparé en deux fichiers différents.

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.scss';
import MarkerClusterGroup from 'react-leaflet-cluster';
import axios from 'axios';

export default function ApiMap() {
  const [dataEvent, setDataEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [filter, setFilter] = useState(null);

  const fetchData = async (apiUrl) => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setDataEvent(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
//Soon condition qui prend le sport à afficher
  useEffect(() => {
    if (filter) {
      fetchData(`http://localhost:225/sports/${filter}`);
    } else {
      fetchData('http://localhost:225/Fitness');
    }
}, [filter]);


  const customIcon = new L.Icon({
    iconUrl: '../images/élongation.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className='map'>
      {loading && <p>Chargement...👌</p>}
      {error && <p>Erreur:😒 {error}</p>}

      <div className='filter-buttons'>
        <label>
          <input
            type='radio'
            value='Workout'
            checked={filter === 'Fitness'}
            onChange={() => handleFilterChange('Fitness')}
          />
          Workout
        </label>
        <label>
          <input
            type='radio'
            value='Skateboard'
            checked={filter === 'Skateboard'}
            onChange={() => handleFilterChange('Skateboard')}
          />
          Skateboard
        </label>
        <label>
          <input
            type='radio'
            value='Basketball'
            checked={filter === 'Basketball'}
            onChange={() => handleFilterChange('Basketball')}
          />
          Basketball
        </label>
        <label>
          <input
            type='radio'
            value='Sprint'
            checked={filter === 'Sprint'}
            onChange={() => handleFilterChange('Sprint')}
          />
          Sprint
        </label>
        <label>
          <input
            type='radio'
            value='Natation'
            checked={filter === 'Natation'}
            onChange={() => handleFilterChange('Natation')}
          />
          Nation
        </label>
      </div>

      {dataEvent.length > 0 && (
        <MapContainer center={[48.7882752, 2.3232512]} zoom={13} className='map_map'>
          <TileLayer //Style Map
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution="<a href='https://carto.com/attribution'>Carto</a> [^5^][5]"
          />
          <MarkerClusterGroup chunkedLoading>
            {dataEvent.map((event) => {
              const lat = parseFloat(event.geo_point_2d.lat);
              const lon = parseFloat(event.geo_point_2d.lon);

              if (!isNaN(lat) && !isNaN(lon)) {
                return (
                  <Marker key={event.osm_id} position={[lat, lon]} icon={customIcon}>
                    <Popup>{event.name}</Popup>
                  </Marker>
                );
              }

              return null;
            })}
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </div>
  );
}

/**
 * @author Yao
 * 
 * @description 
 *  - 
 * 
 * @default ApiMap
 * 
 * @constant dataEvent___loading___error___filter
 *  dataEvent : 
 *  loading :
 *  error : 
 *  filter :
 * 
 * @constant fetchData
 *  @description :
 * 

*/