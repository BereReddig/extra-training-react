import React, { useEffect, useState } from "react";
// import axios from "axios";

export default function Lista({ store }) {
    // const [users, setUsers] = useState([]);
    console.log('store ', store);

    // useEffect(() => {
    //     async function getUsers() {
    //         try {
    //             const { data: { payload } } = await axios.get('http://localhost:5000/users');
    //             setUsers(payload)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //         getUsers()
    //     }
    // }, []);

    return (
        <ul>
            {store.map((item, index) => {
                return <li key={index}>
                    email: {item.email} -
                    nombre: {item.name} -
                    edad: {item.age}
                </li>
            })}

            {/* {users.map((user, index) => {
                return <li key={index}>
                            {user.email}
                        </li>
            })} */}
        </ul>
    );
};