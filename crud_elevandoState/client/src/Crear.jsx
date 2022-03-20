import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    email: '',
    name: '',
    age: ''
};

export default function Crear({ setStore }) {
    const [inputs, setInputs] = useState(initialState);

    function handle(evt) {
        const { name, value } = evt.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    function create() {
        const { email, name, age } = inputs;

        setStore(prevState => [...prevState, { id: uuidv4(), email, name, age }]);
        setInputs(initialState);
    };

    const { email, name, age } = inputs;
    return (
        <div>
            <h3 style={{ textDecoration: "underline overline wavy blue" }}
            >
                Crear usuario
            </h3>
            <label style={{ margin: '0 10px 0 10px' }}>Email:</label>
            <input
                type='email'
                id='1'
                name='email'
                value={email}
                onChange={(handle)}
            />
            {/* <div style={{ color: 'red' }} className="error 1"></div> */}

            <label style={{ margin: '0 10px 0 10px' }}>Nombre: </label>
            <input type='text' id='2' name='name' value={name} onChange={(handle)} />
            {/* <div style={{ color: 'red' }} className="error 2"></div> */}

            <label style={{ margin: '0 10px 0 10px' }}>Edad: </label>
            <input type='text' id='3' name='age' value={age} onChange={(handle)} />
            {/* <div style={{ color: 'red' }} className="error 3"></div> */}

            <button
                onClick={create}
                style={{
                    backgroundColor: '#3fcf1b',
                    borderColor: 'green',
                    marginLeft: '20px'
                }}
            >
                Agregar
            </button>
        </div>
    );
};