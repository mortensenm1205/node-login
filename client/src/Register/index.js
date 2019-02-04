import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LayoutForm } from './css/form';

class RegisterContainer extends Component {
    render() {
        return(
            <LayoutForm>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                     </Form.Text>
                </Form.Group>
                <Button>Register</Button>
            </LayoutForm>
        )
    }
}

export default RegisterContainer;