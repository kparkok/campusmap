import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Row, Col } from 'react-bootstrap';

// Replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "AIzaSyDgC58JNcm8nI5WkV4s_OzjwPffKl288AI";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 21.299917358489935, // New latitude
  lng: -157.81480872274682, // New longitude
};


const Map: React.FC = () => {
  return (
    <Row>
      {/* Column for the Map */}
      <Col md={6}>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            {/* Additional map components or markers can go here */}
          </GoogleMap>
        </LoadScript>
      </Col>

      {/* Column for additional content */}
      <Col md={6}>
        <div style={{ padding: "20px" }}>
          <h2>Campus Information</h2>
        </div>
      </Col>
    </Row>
  );
};

export default Map;
