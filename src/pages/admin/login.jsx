import React, {useState} from 'react';
import {LoginInfo} from '../../Config';
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const Login = ({ setLoginSuccessful }) => {

    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("123");
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const changePasswordVisibility = (e) => {
        e.preventDefault();
        setPasswordVisibility(!passwordVisibility);
    }

    const handleValidation = () => username === LoginInfo.username && password === LoginInfo.password;

    const loginSubmit = (e) => {
        e.preventDefault();
        if(!handleValidation()) return;

        setLoginSuccessful();
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={9} lg={12} xl={10}>
                    <Card className="o-hidden border-0 shadow-lg my-5">
                        <Card.Body className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Login to Manage the Menu!</h1>
                            </div>
                            <Form onSubmit={loginSubmit}>
                                <Form.Group>
                                    <Form.Label className="mb-1">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="UsernameInput"
                                        name="UsernameInput"
                                        placeholder="Enter Username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="my-2">
                                    <Form.Label className="mb-1">
                                        Password
                                        <Button type="button" variant="link"
                                                className="ms-1 p-0 align-text-bottom text-dark"
                                                onClick={changePasswordVisibility}
                                        >
                                            {passwordVisibility ? <AiFillEyeInvisible size="1.2em"/> : <AiFillEye size="1.2em"/>}
                                        </Button>
                                    </Form.Label>
                                    <Form.Control
                                        type={passwordVisibility ? "text" : "password"}
                                        className="form-control"
                                        id="PasswordInput"
                                        name="PasswordInput"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Check me out"
                                    />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;