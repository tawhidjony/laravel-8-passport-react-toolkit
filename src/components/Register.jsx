import axios from 'axios';
import React, { useState } from 'react'
import { Row, Button, Card, Col, Form, } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [password_confirmation, setPassword_confirmation] =useState('');
    const history = useHistory();
    const singUpHandel = (e) => {
        e.preventDefault();
        const data =  {name, email, password, password_confirmation};
        axios.post('register', data)
        .then((res) => {
            if(res.data.token){
              localStorage.setItem('token', res.data.token);
              history.push('/login')
            }
        })
        .catch((error) => {
          console.log(error);
        });

    }
    return (
        <Row className="d-flex justify-content-center">
            <Col className="col-md-4 mt-5">
                <Card className="shadow">
                    <h2 className="text-center pt-4">Register</h2>
                    <Card.Body>
                        <Form  onSubmit={singUpHandel}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPasswordConfirmation">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" name="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" block> Sign Up </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Register;
