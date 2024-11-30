import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.scss';
import MarkerClusterGroup from 'react-leaflet-cluster';
import axios from 'axios';
import { Search, Locate } from 'lucide-react';

// Import des icônes pour chaque sport
import workoutIcon from '../images/workout.png';
import skateIcon from '../images/skateboard.png';
import basketIcon from '../images/basketball.png';
import sprintIcon from '../images/athletisme.png';
import swimIcon from '../images/piscine.png';

function LocationButton({ setUserLocation }) {
  const map = useMap();

  const requestLocation = () => {
    map.locate().on("locationfound", function (e) {
      setUserLocation([e.latitude, e.longitude]);
      map.flyTo([e.latitude, e.longitude], 14);
    });
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <button 
      onClick={requestLocation}
      className="absolute bottom-12 right-8 z-[1000] bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Find my location"
    >
      <Locate className="w-6 h-6" />
    </button>
  );
}

function PulsingLocationMarker({ position }) {
  const [pulseOpacity, setPulseOpacity] = useState(0.3);
  
  useEffect(() => {
    let animationFrameId;
    let startTime;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 2000;
      const opacity = 0.3 + (Math.sin(progress * Math.PI * 2) + 1) * 0.35;
      setPulseOpacity(opacity);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!position) return null;

  return (
    <CircleMarker 
      center={position}
      radius={6}
      pathOptions={{
        color: '#22c55e',
        fillColor: '#22c55e',
        fillOpacity: pulseOpacity,
        weight: 1.5,
        opacity: 0.7
      }}
    />
  );
}

export default function ApiMap() {
  const [dataEvent, setDataEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('Fitness');
  const [userLocation, setUserLocation] = useState(null);

   // icônes pour chaque sport
  const sportIcons = {
    'Fitness': new L.Icon({
      iconUrl: workoutIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    'Skateboard': new L.Icon({
      iconUrl: skateIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    'Basketball': new L.Icon({
      iconUrl: basketIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    'Sprint': new L.Icon({
      iconUrl: sprintIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    'Natation': new L.Icon({
      iconUrl: swimIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })
  };

  // Fonction pour obtenir l'icône appropriée
  const getIconForSport = (sportType) => {
    return sportIcons[sportType] || sportIcons['Fitness'];
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const fetchData = async (apiUrl) => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      const data = response.data;
      setDataEvent(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (filter) {
      fetchData(`http://localhost:225/sports/${filter}`);
    } else {
      fetchData('http://localhost:225/Fitness');
    }
  }, [filter]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className='app-wrapper'>
      <header className='header'>
        <div className='header-content'>
          <div className='logo'>
            <span className='logo-y'>Y</span>SPORT
          </div>
          <nav className='nav-links'>
            <a href="#" className='active'>CARTE SPORTIF</a>
            <a href="#">PARTAGE</a>
          </nav>
        </div>
      </header>

      <div className='search-container'>
        <div className='search-wrapper'>
          <Search className='search-icon' />
          <input
            type="text"
            placeholder="Recherche site"
            className='search-input'
          />
        </div>
      </div>

      <div className='map-section'>
        {loading && <p className="loading-text">Chargement...👌</p>}
        {error && <p className="error-text">Erreur:😒 {error}</p>}

        <div className='filter-buttons'>
          <div className='filter-container'>
            <label>
              <input
                type='radio'
                value='Fitness'
                checked={filter === 'Fitness'}
                onChange={() => handleFilterChange('Fitness')}
              />
              <span className='filter-icon'>🏋️</span>
            </label>
            <label>
              <input
                type='radio'
                value='Skateboard'
                checked={filter === 'Skateboard'}
                onChange={() => handleFilterChange('Skateboard')}
              />
              <span className='filter-icon'>🛹</span>
            </label>
            <label>
              <input
                type='radio'
                value='Basketball'
                checked={filter === 'Basketball'}
                onChange={() => handleFilterChange('Basketball')}
              />
              <span className='filter-icon'>🏀</span>
            </label>
            <label>
              <input
                type='radio'
                value='Sprint'
                checked={filter === 'Sprint'}
                onChange={() => handleFilterChange('Sprint')}
              />
              <span className='filter-icon'>🏃</span>
            </label>
            <label>
              <input
                type='radio'
                value='Natation'
                checked={filter === 'Natation'}
                onChange={() => handleFilterChange('Natation')}
              />
              <span className='filter-icon'>🏊</span>
            </label>
          </div>
        </div>

        <div className='map-container'>
          <MapContainer 
            center={userLocation || [48.7882752, 2.3232512]} 
            zoom={13} 
            className='map_map'
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution="&copy; <a href='https://stadiamaps.com/'>Stadia Maps</a>, &copy; <a href='https://openmaptiles.org/'>OpenMapTiles</a> & <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <LocationButton setUserLocation={setUserLocation} />
            <MarkerClusterGroup chunkedLoading>
              {dataEvent.map((event) => {
                const lat = parseFloat(event.geo_point_2d.lat);
                const lon = parseFloat(event.geo_point_2d.lon);

                if (!isNaN(lat) && !isNaN(lon)) {
                  return (
                    <Marker 
                      key={event.osm_id} 
                      position={[lat, lon]} 
                      icon={getIconForSport(filter)}
                    >
                      <Popup>
                        <div>
                          <h3>{event.name}</h3>
                          {event.commune && <p>Commune: {event.commune}</p>}
                          {event.opening_hours_human && <p>Horaires: {event.opening_hours_human}</p>}
                        </div>
                      </Popup>
                    </Marker>
                  );
                }
                return null;
              })}
            </MarkerClusterGroup>
            {userLocation && <PulsingLocationMarker position={userLocation} />}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}