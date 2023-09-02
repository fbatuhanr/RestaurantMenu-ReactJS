import React, {useState, useEffect, useRef} from 'react'
import {Container, Row, Col, Card, Form, Button, Placeholder} from "react-bootstrap"

import {AiFillPlusCircle} from "react-icons/ai"
import axios from "axios";

const Dashboard = () => {

    const [menu, setMenu] = useState([]);
    const [newDataObject, setNewDataObject] = useState([]);


    useEffect(() => {

        assignData();

    },[]);

    const callData = async () => {

        try {
            const {data} = await axios.get('http://localhost:3001/categories')
            return data;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    const assignData = () => {
        callData().then(data => data !== false && setMenu(data))
    }


    const handleAddItemSubmit = (e, keys, id) => {

        e.preventDefault();

        // introduce keys and pass values by form.
        let newItem = keys.reduce((acc, curr) => {
            acc[curr] = e.target[curr].value;
            return acc;
        }, {});

        e.target.reset();

        //  find related category by id and add new item to items object.
        let subMenu = menu.find(element => element.id === id);
        subMenu.items.push(newItem);

        // update json file by new inserted data with related category id after that we assign menu state (for seeing new inserted json data on the screen).
        axios.put(`http://localhost:3001/categories/${id}`, subMenu)
            .then(response => {
                console.log(`Added! Response: ${response}`)
            assignData();
        });
    }

    const handleUpdateSubmit = (e, keys, id, index) => {

        e.preventDefault();

        // introduce keys and pass values by form.
        let updatedData = keys.reduce((acc, curr) => {
            acc[curr] = e.target[curr].value;
            return acc;
        }, {});

        //  find related category by id and update related index by new one.
        let subMenu = menu.find(element => element.id === id);
        subMenu.items[index] = updatedData;

        // update json file by new data with related category id after that assign menu state (for seeing new updated json data on the screen).
        axios.put(`http://localhost:3001/categories/${id}`, subMenu)
             .then(response => {
                    console.log(`Updated! Response: ${response}`)
                 assignData();
             });
    }

    const handleRemoveButton = (id, index) => {

        let subMenu = menu.find(element => element.id === id);
        subMenu.items.splice(index, 1);

        axios.put(`http://localhost:3001/categories/${id}`, subMenu)
            .then(response => {
                console.log(`Removed! Response: ${response}`)
                assignData();
            });
    }

    return (
        <Container className="py-3">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Row className="text-center pb-1">
                        <Col xs={12}><h1>Admin Dashboard</h1></Col>
                        <Col xs={12}><h3>Manage Menu Items</h3></Col>
                    </Row>
                    <Row>
                        {
                            menu && menu.map(element => {

                                    let {id, slug, info, items} = element;
                                    return (
                                        <Col xs={12} className="my-1">
                                            <Card>
                                                <Card.Header>{slug}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {
                                                            Object.entries(info).map(i => (
                                                                <Form.Group as={Row}>
                                                                    <Form.Label column xs={4}>{i[0]}:</Form.Label>
                                                                    <Col xs={8}>
                                                                        <Form.Control type="text" value={i[1]} />
                                                                    </Col>
                                                                </Form.Group>
                                                            ))
                                                        }
                                                        <div className="d-grid">
                                                            <Button variant="primary">Apply</Button>
                                                        </div>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {
                                                            items.map((i, inx)=>(
                                                                <Col key={inx} xs={12} className="my-2 border rounded p-2 bg-secondary text-white">
                                                                    <Form onSubmit={e => handleUpdateSubmit(e, Object.keys(i), id, inx)}>
                                                                    {
                                                                        Object.entries(i).map(j => (
                                                                            <Form.Group as={Row} className="my-1">
                                                                                <Form.Label column xs={3} className="text-end">{j[0]}:</Form.Label>
                                                                                <Col xs={9}>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        name={j[0]}
                                                                                        defaultValue={j[1]}
                                                                                    />
                                                                                </Col>
                                                                            </Form.Group>
                                                                        ))
                                                                    }
                                                                        <Row className="pt-2 pb-1">
                                                                            <Col className="px-0">
                                                                                <Button variant="primary" className="w-100" type="submit">Update</Button>
                                                                            </Col>
                                                                            <Col className="px-0">
                                                                                <Button variant="danger" className="w-100" type="button"
                                                                                        onClick={()=>handleRemoveButton(id, inx)}>
                                                                                    Remove
                                                                                </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Form>
                                                                </Col>
                                                            ))
                                                        }
                                                        {
                                                            <Col xs={12} className="my-2 border rounded p-2 bg-secondary text-white">
                                                                <Form onSubmit={e => handleAddItemSubmit(e, Object.keys(items[0]), id)}>
                                                                {
                                                                    // we used first element of 'items' for take reference about object keys
                                                                    Object.entries(items[0]).map((j, inx)=>{
                                                                        return (
                                                                            <Form.Group as={Row} className="my-1">
                                                                                <Form.Label column xs={3} className="text-end">
                                                                                    {j[0]}:
                                                                                </Form.Label>
                                                                                <Col xs={9}>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        name={j[0]}
                                                                                        defaultValue=""
                                                                                    />
                                                                                </Col>
                                                                            </Form.Group>
                                                                        )
                                                                    })
                                                                }
                                                                    <div className="d-grid">
                                                                        <Button variant="success" type="submit">Add New Item</Button>
                                                                    </div>
                                                                </Form>
                                                            </Col>
                                                        }

                                                        <Col className="text-center">
                                                            <Button variant="link"><AiFillPlusCircle size="2.5em" color="black"/></Button>
                                                        </Col>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                }
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;