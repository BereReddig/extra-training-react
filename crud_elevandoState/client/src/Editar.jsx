import React, { useState } from "react";

export default function Editar({ store, setStore }) {
    const [inputs, setInputs] = useState('');

    function handle(evt) {
        const { name, value } = evt.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    function findUser(username) {
        const userEdit = store.find((item) => item.name.toLowerCase() === username.toLowerCase());
        setInputs(userEdit);
    }

    return (
        <div>
            <h3 style={{ textDecoration: "underline overline wavy blue" }}
            >
                Editar usuario
            </h3>

            <h4>Paso 1</h4>
            <label for="usuarios">Elegir un usuario: </label>
            <select
                name="usuarios"
                id="usuarios"
                onChange={(e) => findUser(e.target.value)}
            >
                <option selected>Select...</option>
                {store.map((item, index) => {
                    return (
                        <option
                            key={index}
                            value={item.name}
                        >
                            {item.name}
                        </option>
                    );
                })}
            </select>

            {inputs !== '' ? editForm() : ''}
        </div>
    );

    function editForm() {
        const { email, name, age } = inputs;

        return (
            <>
                <h4
                    style={{
                        position: 'absolute',
                        top: '457px',
                        left: '218px'
                    }}
                >
                    Paso 2
                </h4>
                <label style={{ margin: '0 10px 0 10px' }}>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(handle)}
                />

                <label style={{ margin: '0 10px 0 10px' }}>Nombre: </label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(handle)}
                />

                <label style={{ margin: '0 10px 0 10px' }}>Edad: </label>
                <input
                    type='text'
                    name='age'
                    value={age}
                    onChange={(handle)}
                />

                <button
                    onClick={editar}
                    style={{
                        backgroundColor: '#ffc042',
                        borderColor: '#e09704',
                        marginLeft: '20px'
                    }}
                >
                    Editar
                </button>
            </>
        );
    };

    function editar() {
        const updatedUsers = store.map((item) =>
            item.id === inputs.id ? { ...item, ...inputs } : item
        );
        setStore(updatedUsers);
        setInputs({ email: '', name: '', age: '' });
    };
};
