import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer id="footer">
            <Container fluid>
                <Row>
                    <Col>
                        <p className="text-center fs-8 mt-3">
                            <i>Consuming raw or undercooked Meats, Poultry, Seafood, Shellfish or Eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.</i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;