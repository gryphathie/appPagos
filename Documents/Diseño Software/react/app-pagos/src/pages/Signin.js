import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css"
import { useHistory } from "react-router-dom";


export default function Signin() {
  let history = useHistory();
  const [registro, setRegistro] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] =useState("");

  const onChange = (e) => {
    if(e.target.name === "username"){
      setNewUser(e.target.value)
    } else if (e.target.name === "email"){
      setEmail(e.target.value)
    } else if (e.target.name === "password"){
      setPassword(e.target.value)
    } else if (e.target.name === "password2"){
      setPassword2(e.target.value)
    }
  }

  const onSubmite = (e) => {
    e.preventDefault();
    if(newUser !== "" && email !== "" && (password === password2) && password !==""){
      alert("Registro correcto");
      setRegistro(true);
    } else {
      alert("Error: Verifica tus datos, no puede haber campos vacios o tu contraseña no coincidio.")
    }
  }

  const redirect = () => {
    history.push('/login')
  }

  return (
    <>
    {registro === false ?(
      <>
        <div className="Login">
          <div className="d-flex justify-content-center">
            <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3">
              <h1 className="d-flex justify-content-center py-3"> Registrate: </h1>
              <Form onSubmit={onSubmite}>
              <Form.Group size="lg" controlId="user">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  autoFocus
                  name="username"
                  type="username"
                  value={newUser}
                  onChange={onChange}
                  />
                </Form.Group>
                <div className="pt-3">
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
                  </div>
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
                  <div className="pt-3">
                    <Form.Group size="lg" controlId="password">
                      <Form.Label>Confirma tu contraseña:</Form.Label>
                      <Form.Control
                        name="password2"
                        type="password"
                        value={password2}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-grid gap-2 pt-4">
                    <Button variant = "danger" block size="lg" type="submit">
                      Crear cuenta
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
      </>
    ):(
    <>
      <div className="d-flex justify-content-center pt-3">
        <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3">
          <h1 className="d-flex justify-content-center py-3">¡Registro correcto!</h1>
          <p>Verifica tu correo para poder continuar con el proceso de registro.</p>
          <p>Una vez confirmado tu correo, puedes iniciar sesión en el siguiente <a href="/login">enlace</a></p>
        </div>
      </div>
    </>
    )}
  </>
  );
};
//<Button variant = "danger" block size="lg" type="submit" disable={!validateForm()}>
