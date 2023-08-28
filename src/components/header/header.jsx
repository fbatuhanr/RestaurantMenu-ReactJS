import React from 'react';

import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import {General} from "../../DATA/data";

const Header = () => {
    return (
        <header id="header">
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={4} md={2} className='mt-2 mb-3'>
                        {
                            General &&
                            <Link to="/">
                                <img src={General.logoUrl} className='img-fluid' alt={General.title}/>
                            </Link>
                        }
                    </Col>
                </Row>
            </Container>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/apps-and-salads">APPS & SALADS</Nav.Link>
                            <Nav.Link as={Link} to="/sides">SIDES</Nav.Link>
                            <Nav.Link as={Link} to="/kids-meal">KIDS MEAL</Nav.Link>
                            <Nav.Link as={Link} to="/rawbar-and-seafood">RAW BAR & SEAFOOD</Nav.Link>
                            <Nav.Link as={Link} to="/sandwiches">SANDWICHES</Nav.Link>
                            <Nav.Link as={Link} to="/specialties">SPECIALTIES</Nav.Link>

                            <Nav.Link as={Link} to="/cocktails">COCKTAILS</Nav.Link>
                            <Nav.Link as={Link} to="/brews">BREWS</Nav.Link>
                            <Nav.Link as={Link} to="/white-wines">WHITE WINES</Nav.Link>
                            <Nav.Link as={Link} to="/red-wines">RED WINES</Nav.Link>
                            <Nav.Link as={Link} to="/frozen-drinks">FROZEN DRINKS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;