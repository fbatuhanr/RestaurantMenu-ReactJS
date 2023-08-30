import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer id="footer">
            <Container fluid>
                <Row>
                    <Col>
                        <p className="text-center fs-8 mt-3">
                            <i>The ingestion of uncooked or insufficiently cooked meats, poultry, seafood, shellfish, or eggs may heighten the likelihood of contracting a foodborne ailment, particularly if one has specific medical conditions.</i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;