export const getEnvironmentConfig = () => ({
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:225',
    mapTileLayer: process.env.REACT_APP_MAP_TILE_LAYER,
    mapAttribution: process.env.REACT_APP_MAP_ATTRIBUTION,
    environment: process.env.REACT_APP_ENV || 'development',
    version: process.env.REACT_APP_VERSION
});