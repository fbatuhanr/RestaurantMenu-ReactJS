import React, {useEffect, useState} from 'react';

import {Button, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

const Menu = (props) => {

    //const menu = props?.category ? [MenuCategories[props.category]] : Object.values(MenuCategories);

    const [menu, setMenu] = useState(null);

    useEffect(()=>{

        axios.get('http://localhost:3001/categories')
             .then(result => {
                 setMenu(props?.category ? [result.data[props.category]] : Object.values(result.data))
            })

        console.log('get get')

    },[props]);

    return (
        <Container id='menu' className='pt-4 pb-3' fluid>
            {

                menu && menu.map(element => {

                    let info = element.info;
                    let items = element.items;

                    return (
                        <div class='menu-content mb-4'>
                            <Row>
                                <Col xs={12} className='text-center text-white'>
                                    {info && <h1 className='m-2 fw-800'>{info.title}</h1>}
                                    {info && <p className='m-1 fw-500'>{info.description}</p>}
                                </Col>
                            </Row>
                            <Row>
                                {
                                    items.map(item => {
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