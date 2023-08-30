import React from 'react';

import {MenuCategories} from "../DATA/data"
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Menu = (props) => {

    const menu = props?.category ? [MenuCategories[props.category]] : Object.values(MenuCategories);

    return (
        <Container id='menu' className='pt-4 pb-3' fluid>
            {
                menu.map(currMenu => {

                    let menuInfo = currMenu.info;
                    let menuItems = currMenu.items;

                    return (
                        <div class='menu-content mb-4'>
                            <Row>
                                <Col xs={12} className='text-center text-white'>
                                    {menuInfo && <h1 className='m-2 fw-800'>{menuInfo.title}</h1>}
                                    {menuInfo && <p className='m-1 fw-500'>{menuInfo.description}</p>}
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
                    <div className="bg-white border border-warning rounded-bottom px-3 py-2 my-2">
                        <h4 className="text-center">HOOK & COOK</h4>
                        <h3 className="text-center">BRING US WHAT YOU CAUGHT!</h3>
                        <p>
                            Please select your preferred cooking method for the dish, whether it be grilled, blackened, or fried, and pair it with two sides of your party's choosing. The options available for sides include crispy fries, dirty rice, house coleslaw, or Mediterranean couscous. This meal will be served family-style, providing an unforgettable conclusion to your charter trip.
                            <i className='text-secondary'> - $22 per person</i>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;