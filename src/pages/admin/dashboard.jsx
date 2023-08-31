import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Card, Form, Button, Placeholder} from "react-bootstrap"

import {AiFillPlusCircle} from "react-icons/ai"

const Dashboard = () => {

    const [data, setData] = useState(null);

    // const deleteItem = (id) => {
    //     const newItems = items.filter((item) => item.id !== id);
    //     setItems(newItems);
    // };


    const [newDataObject, setNewDataObject] = useState([]);
    const handleNewItemChange = (e, slug) => {

        if(newDataObject[0] && newDataObject[0] !== slug)
            setNewDataObject([]);

        const { name, value } = e.target;
        setNewDataObject(state => [slug, ({ ...state[1], [name]: value })])
    }
    const addNewItem = () => {

        setData(current => {
            return {
                ...current,
                [newDataObject[0]]: {
                    ...current[newDataObject[0]],
                    items: [...current[newDataObject[0]].items, newDataObject[1]]
                }
            }
        })
        updateJsonData();
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const updateJsonData = () => {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'menu.json';
        a.click();
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
                            Object.entries(data).map((item) => {
                                    let slug = item[0];
                                    let info = item[1].info;
                                    let items = item[1].items;
                                    return (
                                        <Col xs={12} className="my-1">
                                            <Card>
                                                <Card.Header>{slug}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {
                                                            Object.entries(info).map(i=>(
                                                                <Form.Group as={Row}>
                                                                    <Form.Label column xs={4}>
                                                                        {i[0]}:
                                                                    </Form.Label>
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
                                                            items.map(i=>(
                                                                <Col xs={12} className="my-2 border rounded p-2 bg-secondary text-white">
                                                                    {
                                                                        Object.entries(i).map(j=>(
                                                                            <Form.Group as={Row} className="my-1">
                                                                                <Form.Label column xs={3} className="text-end">
                                                                                    {j[0]}:
                                                                                </Form.Label>
                                                                                <Col xs={9}>
                                                                                    <Form.Control type="text" value={j[1]} />
                                                                                </Col>
                                                                            </Form.Group>
                                                                        ))
                                                                    }
                                                                    <div className="d-grid">
                                                                        <Button variant="danger">Remove</Button>
                                                                    </div>
                                                                </Col>
                                                            ))
                                                        }
                                                        {
                                                            <Col xs={12} className="my-2 border rounded p-2 bg-secondary text-white">
                                                                {
                                                                    // we used first element of 'items' for take reference about object keys
                                                                    Object.entries(items[0]).map((j, inx)=>{
                                                                      return (
                                                                          <Form.Group as={Row} className="my-1">
                                                                              <Form.Label column xs={3} className="text-end">
                                                                                  {j[0]}:
                                                                              </Form.Label>
                                                                              <Col xs={9}>
                                                                                  <Form.Control type="text" name={j[0]}
                                                                                                value={newDataObject[j[0]]}
                                                                                                onChange={e=>handleNewItemChange(e, slug)}
                                                                                  />
                                                                              </Col>
                                                                          </Form.Group>
                                                                      )
                                                                    })
                                                                }
                                                                <div className="d-grid">
                                                                    <Button variant="success" onClick={addNewItem}>Add New Item</Button>
                                                                </div>
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