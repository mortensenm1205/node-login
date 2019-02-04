import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class RegisterContainer extends Component {
    render() {
        return(
            <Form>
                {/* <input type="text" name="email" value="" />
                <input type="text" name="password" value="" />
                <button>Register</button> */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                </Form.Group>
            </Form>
        )
    }
}

export default RegisterContainer;