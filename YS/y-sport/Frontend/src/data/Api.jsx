import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.scss';
import MarkerClusterGroup from 'react-leaflet-cluster';

export default function ApiMap() {
  const [dataEvent, setDataEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(null);

  const fetchData = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('La requête a échoué !');
      }
      const data = await response.json();
      setDataEvent(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter) {
      // Si un filtre est sélectionné, appeler fetchData avec l'URL correspondante
      const apiUrl = `http://localhost/YSport/Api${filter}.php`;
      fetchData(apiUrl);
    } else {
      // Sinon, appeler fetchData sans filtre
      fetchData('http://localhost/YSport/ApiWorkout.php');
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
        {['Workout', 'Skate', 'Basket', 'Sprint', 'Nation'].map((sport) => (
          <label key={sport}>
            <input
              type='radio'
              value={sport}
              checked={filter === sport}
              onChange={() => handleFilterChange(sport)}
            />
            {sport}
          </label>
        ))}
      </div>

      {dataEvent.length > 0 && (
        <MapContainer center={[48.7882752, 2.3232512]} zoom={13} className='map_map'>
          <TileLayer
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
