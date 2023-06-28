import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "../Styles/MapPage.css";

const MapPage = () => {
  const locations = [
    { lat: 51.505, lng: -0.09 },
    { lat: 40.7128, lng: -74.006 },
    // Add more locations here based on your data
  ];

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  const customIcon = L.icon({
    iconUrl: "/path/to/custom-icon.png",
    iconSize: [32, 32],
  });

  return (
    <div className="MapPage-container">
      <h1>Map Page</h1>
      <div className="MapPage-mapWrapper">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          scrollWheelZoom={false}
          whenCreated={setMap}
          className="MapPage-map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={customIcon}
            >
              <Popup className="MapPage-marker-popup">
                Marker Popup Content
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
