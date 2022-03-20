import React, { useState } from 'react';
//components
import Total from './Total';
import Lista from './Lista';
import Crear from './Crear';
import Borrar from './Borrar';
import Editar from './Editar';

const initialState = [
  { id: 1, email: 'foo@foo.com', name: 'foo', age: 20 },
  { id: 2, email: 'bar@bar.com', name: 'bar', age: 23 },
  { id: 3, email: 'hux@hux.com', name: 'hux', age: 30 },
  { id: 4, email: 'remi@remi.com', name: 'remi', age: 40 }
];

export default function App() {
  const [store, setStore] = useState(initialState);

  return(
    <>
      <Total store={store} />
      {"*".repeat(20)}
      <Lista store={store} />
      {"*".repeat(20)}
      <Crear setStore={setStore} />
      {"*".repeat(20)}
      <Borrar store={store} setStore={setStore} />
      {"*".repeat(20)}
      <Editar store={store} setStore={setStore} />
    </>
  )
}
