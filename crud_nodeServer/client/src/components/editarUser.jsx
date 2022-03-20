import React, { useState } from "react";
//bootsrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

//hoks & actions
import useGetUsers from "../hooks/useGetUsers.hook";
import actionsUsers from "../api/actionsUsers";

export default function EditarUser() {
    const [inputs, setInputs] = useState('');
    const [userSelect, setUserSelect] = useState('');
    const { users } = useGetUsers();
    const { doEdit } = actionsUsers();

    function handle(evt) {
        const { name, value } = evt.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    function findUser(username) {
        if (username === 'Select...') {
            setUserSelect('Select...');
            setInputs('');
        } else {
            //console.log(username);
            setUserSelect(username);
            const userEdit = users.find((item) => item.name.toLowerCase() === username.toLowerCase());
            setInputs(userEdit);
        }
    }

    function editar() {
        doEdit({ ...inputs });
        setInputs('');
        setUserSelect('');
    }

    return (
        <Container>
            <Row>
                <Form>
                    <Form.Group as={Row}>
                        <h3 style={{
                            textDecoration: "underline overline dotted orange",
                            marginBottom: '2%'
                        }}
                        >
                            Editar usuario
                        </h3>
                        <Col>
                            <h4>Paso 1</h4>
                            <Form.Label
                                style={{ marginBottom: '2%' }}
                            >
                                Elegir un usuario:
                            </Form.Label>
                            <Col
                                style={{ marginBottom: '2%' }}
                            >
                                <Form.Select
                                    value={userSelect}
                                    name="usuarios"
                                    id="usuarios"
                                    onChange={(e) => findUser(e.target.value)}
                                >
                                    <option>Select...</option>
                                    {users.map((usuario, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={usuario.name}
                                            >
                                                {usuario.name}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Col>
                        </Col>
                    </Form.Group>
                </Form>
                <Col>
                    {inputs !== '' ? editForm() : ''}
                </Col>
            </Row>
        </Container>
    );

    function editForm() {
        const { email, name, role } = inputs;

        return (
            <Form>
                <Form.Group as={Row}>
                    <h4>Paso 2</h4>
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
                            value={role}
                            name="role"
                            id="role"
                            onChange={handle}
                        >
                            <option value='admin'>admin</option>
                            <option value='dev'>dev</option>
                        </Form.Select>
                    </Col>
                    <Button
                        onClick={editar}
                        style={{
                            backgroundColor: '#ffc042',
                            borderColor: '#e09704'
                        }}
                    >
                        Editar
                    </Button>
                </Form.Group>
            </Form>
        );
    };
};