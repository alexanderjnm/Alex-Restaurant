import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase"
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import classes from './reserva.module.css'

function Reserva() {
  const [users, setUsers] = useState([]);
  const useCollectionRef = collection(db, "reservaciones");
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [mesa, setMesa] = useState(0);

  const createUser = async () => {
    await addDoc(useCollectionRef, { nombre: name, correo: correo, mesa: mesa });
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(useCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const borrarUsuario = async (id) => {
    const userDoc = doc(db, "reservaciones", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <nav>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
      </nav>
      <h1 className="title">Reservations</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="Correo"
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
          value={correo}
        />
        <input
          type="number"
          placeholder="Mesa"
          onChange={(e) => {
            setMesa(e.target.value);
          }}
          value={mesa}
        />
        <button onClick={createUser}>Enviar</button>
      </div>

      <div className="user-list">
        {users.map((item) => {
          return (
            <div key={item.id} className="user-item">
              <h1>Name: {item.nombre}</h1>
              <h1>Email: {item.correo}</h1>
              <h1>Table: {item.mesa}</h1>
              <button onClick={() => borrarUsuario(item.id)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reserva;