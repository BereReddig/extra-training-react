import React, { useState } from 'react';
//bootsrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { v4 as uuidv4 } from 'uuid';

import actionsUsers from '../api/actionsUsers';

const initialState = {
    email: '',
    name: '',
    role: ''
};

export default function CrearUser() {
    const [inputs, setInputs] = useState(initialState);
    const { doAdd } = actionsUsers();

    function handle(e) {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    function crear() {
        doAdd({ ...inputs, id: uuidv4() });
        setInputs(initialState);
        window.document.location.reload(true);
    }

    const { email, name } = inputs;
    return (
        <Form>
            <Form.Group as={Row}>
                <h3 style={{
                    textDecoration: "underline overline dotted green",
                    marginBottom: '2%'
                }}
                >
                    Crear usuario
                </h3>
                <Form.Label
                    column sm={2}
                    style={{ marginBottom: '2%' }}
                >
                    Email:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handle}
                    />
                </Col>
                <Form.Label
                    column sm={2}
                    style={{ marginBottom: '2%' }}
                >
                    Name:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type='text'
                        name='name'
                        value={name}
                        onChange={handle}
                    />
                </Col>
                <Form.Label
                    column sm={2}
                    style={{ marginBottom: '2%' }}
                >
                    Role:
                </Form.Label>
                <Col sm={10}>
                    <Form.Select
                        name="role"
                        onChange={handle}
                    >
                        <option>Select...</option>
                        <option value='admin'>admin</option>
                        <option value='dev'>dev</option>
                    </Form.Select>
                </Col>
                <Button
                    onClick={crear}
                    style={{
                        backgroundColor: '#3fcf1b',
                        borderColor: 'green'
                    }}
                >
                    Agregar
                </Button>
            </Form.Group>
        </Form>
    );
};