import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import Navbar from '../components/Navbar/index';
import Doughnu from './Doughnu';
import Agregar from './Agregar';

const name = "Gabriel";

const Login = () => {
  const [sesion, setSesion] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if(e.target.name === "email"){
      setEmail(e.target.value)
    } else if (e.target.name === "password"){
      setPassword(e.target.value)
    }
  }

  const onSubmite = (e) => {
    e.preventDefault();
    if (email === "gabriel@gmail.com" && password === "athie"){
      alert("Acceso correcto");
      setSesion(true);
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <>
    {sesion === false ?(
      <>
        <div className="Login">
          <div className="d-flex justify-content-center">
          <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3">
          <h1 className="d-flex justify-content-center py-3"> Inicia Sesión: </h1>
          <Form onSubmit={onSubmite}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                />
              </Form.Group>
              <div className="pt-3">
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                  />
                </Form.Group>
              </div>
              <div className="d-grid gap-2 pt-4">
                <Button variant = "danger" block size="lg" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
        </div>
      </>
    ):(
      <>
        <Doughnu name={name} />
        <Agregar />
        <div className="d-flex justify-content-center pb-3">
          <button onClick={() => setSesion(false)}>Cerrar Sesion</button>
        </div>
      </>
    )}
    </>
  )
}

export default Login;
