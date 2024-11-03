import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Row, Col, Button } from 'react-bootstrap';

const GOOGLE_MAPS_API_KEY = "AIzaSyDgC58JNcm8nI5WkV4s_OzjwPffKl288AI"

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Initial center (could be a default location)
const initialCenter = {
  lat: 21.299917358489935,
  lng: -157.81480872274682,
};

// Target location to display on button click
const targetLocation = {
  lat: 21.298486801858726,
  lng: -157.8186636618029,
};

const MapWithButton: React.FC = () => {
  // State to store the map's current center
  const [mapCenter, setMapCenter] = useState(initialCenter);

  // Handler to update the map center to the target location
  const handleShowLocation = () => {
    setMapCenter(targetLocation);
  };

  return (
    <Row>
      {/* Column for the Map */}
      <Col md={6}>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={15}>
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>
      </Col>

      {/* Column for additional content and button */}
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h2>Campus Information</h2>
          <p>Click the button below to display the location on the map:</p>
          
          <Button onClick={handleShowLocation} className="m-1">
            Show Location
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default MapWithButton;
