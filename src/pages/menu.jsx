import React from 'react';
import {useParams} from "react-router-dom";
import {MenuItem} from "../DATA/data";
import {Button, Card} from "react-bootstrap";

const Menu = () => {

    const {menuType} = useParams();

    return (
        <div>
            {
                MenuItem[menuType].map(item=>{
                    return (
                        <Card className='my-2'>
                        <Card.Body>
                            <Card.Title className={item.description ? 'border-bottom' : 'm-0'}>
                                <span className='item-title fw-bolder'>{item.title}</span>
                                <span className='item-price float-end'>{item.price}</span></Card.Title>
                            {
                                item.description &&
                                <Card.Text>
                                    <span className='item-description fst-italic'>{item.description}</span>
                                </Card.Text>
                            }
                        </Card.Body>
                        </Card>
                    )
                })
            }
            
        </div>
    );
};

export default Menu;