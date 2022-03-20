import React, { useState } from "react";

export default function Borrar({ store, setStore }) {
    const [input, setInput] = useState({ name: '' });

    function borrar() {
        const { name } = input;
        const filteredStore = store.filter(item => item.name !== name);
        setStore(filteredStore);
        setInput({ name: '' });
    }

    const { name } = input;
    return(
        <div>
            <h3 style={{ textDecoration: "underline overline wavy blue"}}
            >
                Borrar usuario por nombre
            </h3>
            <label style={{ margin: '0 10px 0 10px'}}>Nombre: </label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setInput({ name: e.target.value})}
            />

            <button 
                onClick={borrar}
                style={{ 
                    backgroundColor: '#f2292f',
                    borderColor: '#a8050a',
                    marginLeft: '20px'
                }}
            >
                Borrar
            </button>
        </div>
    );
};