// import React, {
//     useState,
//     useEffect
// } from "react";
// //fetch
// import fetchPlaceholder from "../api/fetch_placeholde";
// //utils
// import utils from "../utils/utils";

// export default function useGetUsers() {
//     const [users, setUsers] = useState([]);
useEffect(() => {
    let cacheUsers;
    if (utils.getItem("users")) {
        cacheUsers = utils.getItem("users");
        setUsers(cacheUsers);
    } else {
        async function getData() {
            try {
                const { data } = await fetchPlaceholder.get("/users");
                utils.setItem("users", data)
                cacheUsers = utils.getItem("users");
                setUsers(cacheUsers);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }
}, []);
//     return {
//         users
//     }
// }
// ---------------------------------------------------
//     Juan Carlos Montilla12: 18
// import axios from "axios";
// const fetchPlaceholder = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     timeout: 1000,
// });
// export default fetchPlaceholder;
// import axios from "axios";
// const fetchPlaceholder = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     timeout: 1000,
// });
// export default fetchPlaceholder;
// ---------------------------------------------------
// export default function Users() {
//     const { users } = useGetUsers();
//     console.log(users);
//     return (
//         <div>
//             <h3>users</h3>
//             {users.map((user, idx) => <li key={idx}>{user.username} -NAME: {user.name} -@: {user.email}</li>)}
//         </div>
//     )
// }

import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// axios
import httpClient from '../axios/custom-client';
// utils
import { store } from '../utils/utils';
const useUsers = () => {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        await httpClient
            .get('/users')
            .then((res) => res.data)
            .then((data) => store.setItem('users', data))
            .catch((err) => {
                console.log(err);
                store.setItem('users', []);
            });
    }
    useEffect(async () => {
        if (!store.getItem('users') || store.getItem('users')?.length < 1) {
            await fetchUsers();
        }
        const cachedUsers = store.getItem('users');
        setUsers(cachedUsers);
    }, []);
    const findUserByUsername = (username) => {
        return users.find((user) => user.username.toLowerCase() === username.toLowerCase());
    };
    const addUser = (newUser) => {
        const newUsersList = [...users, { ...newUser, id: uuid() }];
        store.setItem('users', newUsersList);
        setUsers(newUsersList);
    };
    const deleteUser = (userId) => {
        const filteredUsers = users.filter((user) => user.id !== userId);
        store.setItem('users', filteredUsers);
        setUsers(filteredUsers);
    };
    const updateUser = (userId, newValues) => {
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, ...newValues } : user
        );
        store.setItem('users', updatedUsers);
        setUsers(updatedUsers);
    };
    return { users, addUser, findUserByUsername, deleteUser, updateUser };
};
export default useUsers;


//-------------------------------------------------

function App() {
    const { users, addUser, findUserByUsername, deleteUser, updateUser } = useUsers();
    return (
      <div className="container mx-auto max-w-3xl">
        <Users users={users} />
        <AddUser addUser={addUser} />
        <DeleteUser findByUsername={findUserByUsername} deleteUser={deleteUser} />
        <UpdateUser findByUsername={findUserByUsername} updateUser={updateUser} />
      </div>
    );
  }