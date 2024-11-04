import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Row, Col, Button } from 'react-bootstrap';
import locationData from '../data/locations.json';

const GOOGLE_MAPS_API_KEY = "AIzaSyDgC58JNcm8nI5WkV4s_OzjwPffKl288AI";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Initial center (could be a default location)
const initialCenter = {
  lat: 21.299917358489935,
  lng: -157.81480872274682,
};

const MapWithMultipleLocations: React.FC = () => {
  // State to store the map's current center
  const [mapCenter, setMapCenter] = useState(initialCenter);

  // Handler to update the map center to a specific location
  const handleShowLocation = (lat: number, lng: number) => {
    setMapCenter({ lat, lng });
  };

  return (
    <Row>
      {/* Column for the Map */}
      <Col md={6}>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={16}>
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>
      </Col>

      {/* Column for additional content and buttons */}
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h2>Campus Information</h2>
          <p>Select a location to display on the map:</p>
          
          {/* Render a button for each location */}
          {locationData.locations.map((location, index) => (
            <Button
              key={index}
              onClick={() => handleShowLocation(location.lat, location.lng)}
              className="m-1"
            >
              {location.name}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default MapWithMultipleLocations;
