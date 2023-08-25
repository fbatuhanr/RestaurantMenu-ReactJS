import React from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const Categories = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/">All</Nav.Link>
                        <Nav.Link as={Link} to="/menu/apps-and-salads">APPS & SALADS</Nav.Link>
                        <Nav.Link as={Link} to="/menu/sides">SIDES</Nav.Link>
                        <Nav.Link as={Link} to="/menu/kids-meal">KIDS MEAL</Nav.Link>
                        <Nav.Link as={Link} to="/menu/rawbar-and-seafood">RAW BAR & SEAFOOD</Nav.Link>
                        <Nav.Link as={Link} to="/menu/sandwiches">SANDWICHES</Nav.Link>
                        <Nav.Link as={Link} to="/menu/specialties">SPECIALTIES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Categories;