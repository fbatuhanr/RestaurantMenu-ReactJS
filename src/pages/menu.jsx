import React from 'react';
import {useParams} from "react-router-dom";
import {MenuCategories} from "../DATA/data";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Menu = () => {

    const {category} = useParams();

    const menu = category ? [MenuCategories[category]] : Object.values(MenuCategories);

    return (
        <Container className='pt-4 pb-3'>
            {
                menu.map(currMenu => {

                    let menuInfo = currMenu.info;
                    let menuItems = currMenu.items;

                    return (
                        <div class='menu-content mb-5'>
                            <Row>
                                <Col xs={12} className='text-center'>
                                    {menuInfo && <h1>{menuInfo.title}</h1>}
                                    {menuInfo && <p className='m-1'>{menuInfo.description}</p>}
                                </Col>
                            </Row>
                            <Row>
                                {
                                    menuItems.map(item=>{
                                        return (
                                            <Col xs={12}>
                                                <Card className='my-1'>
                                                    <Card.Body>
                                                        <Card.Title className={item.description ? 'border-bottom' : 'm-0'}>
                                                            <span className='item-title fw-bolder'>{item.title}</span>
                                                            {item.price && <span className='item-price float-end'>{item.price}</span>}
                                                        </Card.Title>
                                                        {
                                                            item.description &&
                                                            <Card.Text>
                                                                <span className='item-description fst-italic'>{item.description}</span>
                                                            </Card.Text>
                                                        }
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    )
                })
            }


            <Row>
                <Col>
                    <div className="border border-secondary px-3 py-2 mt-3">
                        <h2 className="text-center">BREAD SERVICE</h2>
                        <p>
                            Skillet Corn Bread with Our House Special Crawfish and Conecuh Sausage Cream Gravy
                            <i className='text-secondary'> - $12</i>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="border border-warning px-3 py-2 my-2">
                        <h4 className="text-center">HOOK & COOK</h4>
                        <h3 className="text-center">BRING US WHAT YOU CAUGHT!!!</h3>
                        <p>
                            Have it grilled, blackened or fried with two sides of your party’s choice. Crispy fries, dirty rice, house coleslaw or mediterranean couscous. Served up family style for an unforgettable end to your charter trip.
                            <i className='text-secondary'> - $22 per person</i>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;