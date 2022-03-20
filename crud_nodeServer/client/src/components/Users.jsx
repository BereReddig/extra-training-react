import React, { useState, useEffect } from 'react';
//bootsrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//hoks & actions
import useGetUsers from "../hooks/useGetUsers.hook";
import actionsUsers from "../api/actionsUsers";

export default function Users() {
    //const [data, setData] = useState([]);

    const { users } = useGetUsers();
    const { doDelete } = actionsUsers();
    
    // useEffect(() => {
    //     setData(users);
    //     console.log('users', users)
    // }, [users]);

    // function findUser(id) {
    //     console.log('id findUser',  id)
    //     const newUsers = users.filter((item) => item.id !== id);
    //     doDelete(id);
    //     setData(newUsers);
    // }

    return (
        <>
            <h4
                style={{ textDecoration: "underline overline dotted Blue" }}
            >
                Users:
            </h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>email</th>
                        <th>name</th>
                        <th>role</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Button
                                        value={user.id}
                                        onClick={(e) => doDelete(e.target.value)}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: 'red',
                                            borderColor: 'red'
                                        }}
                                    >
                                        borrar
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};