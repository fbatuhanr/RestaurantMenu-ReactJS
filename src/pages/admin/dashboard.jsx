import React, {useState, useEffect, useRef, useContext} from 'react'
import axios from "axios";
import Swal from "sweetalert2";

import {Container, Row, Col, Card, Form, Button, Accordion, useAccordionButton, AccordionContext} from "react-bootstrap"
import './style.css'

import {AiFillPlusCircle} from "react-icons/ai"
import {MdExpandMore, MdExpandLess, MdOutlineDangerous} from "react-icons/md";

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


    const handleAddItemSubmit = (e, id) => {

        e.preventDefault();

        // introduce keys and pass values by form.
        /*let newItem = keys.reduce((acc, curr) => {
            acc[curr] = e.target[curr].value;
            return acc;
        }, {});*/

        const {title, description, price} = e.target;
        const newItem = {
            title: title.value,
            description: description.value,
            price: price.value
        }

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

                 setMenu([]);
                 console.log(`Updated! Response: ${response}`)
                 assignData();
             });
    }

    const handleRemoveButton = (id, index) => {

        let subMenu = menu.find(element => element.id === id);
        subMenu.items.splice(index, 1);

        axios.put(`http://localhost:3001/categories/${id}`, subMenu)
            .then(response => {

                setMenu([]);
                console.log(response)
                assignData();
            });
    }


    const handleUpdateCategorySubmit = (e, keys, id) => {

        e.preventDefault();

        // introduce keys and pass values by form.
        let updatedData = keys.reduce((acc, curr) => {
            acc[curr] = e.target[curr].value;
            return acc;
        }, {});

        //  find related category by id and update related index by new one.
        let subMenu = menu.find(element => element.id === id);
        subMenu.info = updatedData;

        // update json file by new data with related category id after that assign menu state (for seeing new updated json data on the screen).
        axios.put(`http://localhost:3001/categories/${id}`, subMenu)
            .then(response => {

                setMenu([]);
                console.log(`Updated Category Info! Response: ${response}`)
                assignData();
            });
    }

    function AccordionToggle({ eventKey, callback }) {

        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <Button variant={isCurrentEventKey ? 'outline-primary' : 'primary'} type="button" onClick={decoratedOnClick}>
                {isCurrentEventKey ? 'HIDE ' : 'SHOW ' }
                MENU ITEMS
                {isCurrentEventKey ? <MdExpandLess  size="1.5em"/> : <MdExpandMore size="1.5em"/>  }
            </Button>
        );
    }

    const handleRemoveCategoryButton = (id) => {

        Swal.fire({
            title: 'Do you want to delete the menu category you selected?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3001/categories/${id}`)
                    .then(response => {

                        console.log(`Deleted: ${response}`)
                        setMenu([]);
                        Swal.fire('Category Deleted!', '', 'success')
                            .then(()=>{
                                assignData();
                            })
                    })
            }else if (result.isDenied) {
                Swal.fire('Deletion cancelled!', '', 'info')
            }
        })

    }

    const handleAddNewSubCategory = e => {

        e.preventDefault()

        const {slug, title, description} = e.target;

        // 'id' key will create automatically
        const subCategoryData = {
            slug: slug.value,
            info: {
                title: title.value,
                description: description.value
            },
            items: []
        }

        e.target.reset();

        axios.post(`http://localhost:3001/categories`, subCategoryData)
            .then(response => {

                console.log(response);
                setMenu([]);
                Swal.fire('Good job!', `${slug.value} category created successfully.`, 'success')
                    .then(()=>{
                        assignData();
                    })
            });
    }

    return (
        <Container className="py-3">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Row className="text-center mb-3">
                        <Col xs={12}><h1>Admin Dashboard</h1></Col>
                        <Col xs={12}><h3>Manage Menu Items</h3></Col>
                    </Row>
                    <Row>
                        {
                            menu && menu.map(element => {

                                    let {id, slug, info, items} = element;
                                    return (
                                        <Col xs={12} className="my-1">
                                            <Accordion>
                                            <Card>
                                                <Card.Header>
                                                    <h3 className="float-start m-0 p-1">{slug}</h3>
                                                    <div className="float-end">
                                                        <AccordionToggle eventKey={id} />
                                                        <Button variant="danger" className="ms-1" onClick={()=>handleRemoveCategoryButton(id)}><MdOutlineDangerous size="1.5em"/></Button>
                                                    </div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey={id}>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <Form onSubmit={e => handleUpdateCategorySubmit(e, Object.keys(info), id)}>
                                                        {
                                                            Object.entries(info).map(i => (
                                                                <Form.Group as={Row}>
                                                                    <Form.Label column xs={4}>{i[0]}:</Form.Label>
                                                                    <Col xs={8}>
                                                                        <Form.Control type="text" name={i[0]} defaultValue={i[1]} />
                                                                    </Col>
                                                                </Form.Group>
                                                            ))
                                                        }
                                                        <div className="d-grid">
                                                            <Button variant="primary" type="submit">Update Informations</Button>
                                                        </div>
                                                        </Form>
                                                    </Card.Title>
                                                    <Card.Text className="mt-4">
                                                            {
                                                                items.map((i, inx)=>(
                                                                    <Col key={inx} xs={12} className="my-1 border rounded p-2 bg-secondary text-white">
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
                                                                    <Form onSubmit={e => handleAddItemSubmit(e, id)}>
                                                                        <Form.Group as={Row} className="my-1">
                                                                            <Form.Label column xs={3} className="text-end">Title:</Form.Label>
                                                                            <Col xs={9}><Form.Control type="text" name="title" defaultValue=""/></Col>
                                                                        </Form.Group>

                                                                        <Form.Group as={Row} className="my-1">
                                                                            <Form.Label column xs={3} className="text-end">Description:</Form.Label>
                                                                            <Col xs={9}><Form.Control type="text" name="description" defaultValue=""/></Col>
                                                                        </Form.Group>

                                                                        <Form.Group as={Row} className="my-1">
                                                                            <Form.Label column xs={3} className="text-end">Price:</Form.Label>
                                                                            <Col xs={9}><Form.Control type="text" name="price" defaultValue=""/></Col>
                                                                        </Form.Group>
                                                                        {
                                                                            // // we used first element of 'items' for take reference about object keys
                                                                            // Object.entries(items[0]).map((j, inx)=>{
                                                                            //     return (
                                                                            //         <Form.Group as={Row} className="my-1">
                                                                            //             <Form.Label column xs={3} className="text-end">
                                                                            //                 {j[0]}:
                                                                            //             </Form.Label>
                                                                            //             <Col xs={9}>
                                                                            //                 <Form.Control
                                                                            //                     type="text"
                                                                            //                     name={j[0]}
                                                                            //                     defaultValue=""
                                                                            //                 />
                                                                            //             </Col>
                                                                            //         </Form.Group>
                                                                            //     )
                                                                            // })
                                                                        }
                                                                        <div className="d-grid">
                                                                            <Button variant="success" type="submit">Add New Item</Button>
                                                                        </div>
                                                                    </Form>
                                                                </Col>
                                                            }
                                                        </Card.Text>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            </Accordion>
                                        </Col>
                                    )
                                }
                            )
                        }

                    </Row>
                    <Row>
                        <Col xs={12} className="mt-4">
                            <Card>
                                <Card.Header><h5 className='text-center m-0 p-2'>ADD NEW CATEGORY</h5></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleAddNewSubCategory}>
                                        <Card.Title>
                                            <Form.Group as={Row} className="my-1">
                                                <Form.Label column xs={3} className="text-end">Slug:</Form.Label>
                                                <Col xs={8}><Form.Control type="text" name="slug" placeholder="food-menu" required={true}/></Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="my-1">
                                                <Form.Label column xs={3} className="text-end">Title:</Form.Label>
                                                <Col xs={8}><Form.Control type="text" name="title" placeholder="Food Menu" /></Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="my-1">
                                                <Form.Label column xs={3} className="text-end">Description:</Form.Label>
                                                <Col xs={8}><Form.Control type="text" name="description" placeholder="Sample description for food menu..." /></Col>
                                            </Form.Group>
                                        </Card.Title>
                                        <Card.Text className="text-center">
                                            <Button variant="link" type="submit"><AiFillPlusCircle size="3em" color="black"/></Button>
                                        </Card.Text>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;