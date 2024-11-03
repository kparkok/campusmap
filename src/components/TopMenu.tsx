'use client';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart, GeoAltFill} from 'react-bootstrap-icons';

const TopMenu = () => (
    <Navbar style={{ backgroundColor: "#065e0f", color: "white" }} className="justify-content-center">

      <Container>
        <Nav className="me-auto">
            <h1>Campus Map: University of Hawaii</h1>
        </Nav>
      </Container>
    </Navbar>
);

export default TopMenu;