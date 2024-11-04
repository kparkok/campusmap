import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import locationData from '../data/locations.json';

const GOOGLE_MAPS_API_KEY = "AIzaSyDgC58JNcm8nI5WkV4s_OzjwPffKl288AI";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const initialCenter = {
  lat: 21.299917358489935,
  lng: -157.81480872274682,
};

const MapWithDropdown: React.FC = () => {
  // State to store the marker's position separately
  const [markerPosition, setMarkerPosition] = useState(initialCenter);
  const [selectedLocation, setSelectedLocation] = useState(null as null | { name: string; info: string });

  // Handler to update only the marker position and selected location info
  const handleShowLocation = (location: any) => {
    setMarkerPosition({ lat: location.lat, lng: location.lng });
    setSelectedLocation({ name: location.name, info: location.info });
  };

  // Handler to reset selected location and show dropdown
  const handleBackClick = () => {
    setSelectedLocation(null);
  };

  return (
    <Row>
      <Col md={6}>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={initialCenter} zoom={15}>
            <Marker position={markerPosition} />
          </GoogleMap>
        </LoadScript>
      </Col>

      {/* Column for additional content or selected location info */}
      <Col md={6}>
        <div style={{ padding: "20px", position: "relative" }}>
          <h2>Campus Information</h2>
          
          {selectedLocation ? (
            // Display selected location info with back button
            <div>
              <Button
                variant="link"
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={handleBackClick}
              >
                Back
              </Button>
              <h3>{selectedLocation.name}</h3>
              <p>{selectedLocation.info}</p>
            </div>
          ) : (
            // Default dropdown if no location is selected
            <>
              <p>Select a location to display on the map:</p>
              <Dropdown>
                <Dropdown.Toggle as="span" style={{ cursor: "pointer", color: "#333", textDecoration: "underline" }} id="dropdown-basic">
                  Buildings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {locationData.locations.map((location, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleShowLocation(location)}
                    >
                      {location.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle as="span" style={{ cursor: "pointer", color: "#333", textDecoration: "underline" }} id="dropdown-basic">
                  Places to Eat
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {locationData.locations.map((location, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleShowLocation(location)}
                    >
                      {location.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle as="span" style={{ cursor: "pointer", color: "#333", textDecoration: "underline" }} id="dropdown-basic">
                  Transportation
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {locationData.locations.map((location, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleShowLocation(location)}
                    >
                      {location.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default MapWithDropdown;