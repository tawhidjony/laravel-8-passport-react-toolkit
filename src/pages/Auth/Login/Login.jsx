import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Button, Card, Col, Form, } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginActionSuccess } from './loginAction';

const Login = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
     
    //       dispatch(loginActionSuccess())
      
    // },[])

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
   

    const loginSubmit = (data) =>{
      
        dispatch(loginActionSuccess(data))
        history.push('/')
        // const data = {email, password};
        // axios.post('login', data)
        //   .then((res) => {
        //       if(res.data.token){
        //         localStorage.setItem('token', res.data.token);
        //         sessionStorage.setItem('token2', res.data.token);
        //         history.push('/')
        //       }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
    }

    return (
        <Row className="d-flex justify-content-center">
            <Col className="col-md-4 mt-5">
                <Card className="shadow">
                    <h2 className="text-center pt-4">Login</h2>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(loginSubmit)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" ref={register} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" ref={register}  placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" block> Submit </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login
