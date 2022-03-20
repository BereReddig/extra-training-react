import { useState, useEffect } from 'react';

//api
import httpClient from '../api/http_client';
import apiUsers from '../api/apiUsers';


export default function useGetUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const { data: { payload } } = await httpClient.get(apiUsers.GET);
            setUsers(payload);
        };
        getUsers();
    }, []);

    return { users };
};