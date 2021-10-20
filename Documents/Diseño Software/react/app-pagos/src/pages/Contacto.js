import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css"
import {Envelope} from 'react-bootstrap-icons';

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nota, setNota] = useState("");
  const [envio, setEnvio] = useState(false);

  const onChange = (e) => {
    if(e.target.name === "nombre"){
      setNombre(e.target.value)
    } else if (e.target.name === "email"){
      setEmail(e.target.value)
    } else if (e.target.name === "nota"){
      setNota(e.target.value)
    }
  }

  const onSubmite = (e) => {
    e.preventDefault();
    if(nombre !== "" && email !== "" && nota !==""){
      setEnvio(true);
    } else {
      alert("Error: Verifica tus datos, no puede haber campos vacios.")
    }
  }

  return(
    <>
    {envio === false ?(
      <>
        <div className="Login">
          <div className="d-flex justify-content-center">
            <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3">
              <div className="d-flex justify-content-center py-2">
                  <Envelope size={60}/>
              </div>
              <span className="border-bottom"></span>
              <h1 className="d-flex justify-content-center py-3"> Contáctanos: </h1>
              <Form onSubmit={onSubmite}>
              <Form.Group size="lg" controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  autoFocus
                  name="nombre"
                  type="username"
                  value={nombre}
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
                    <label>Mensaje:</label>
                    <textarea className="form-control" id="nota"  name="nota" rows="5" onChange={onChange}></textarea>
                  </div>
                  <div className="d-grid gap-2 pt-4">
                    <Button variant = "danger" block size="lg" type="submit">
                      Enviar
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
          <h1 className="d-flex justify-content-center py-3">¡Mensaje enviado!</h1>
          <p>Verifica tu correo ya que por este medio estara llegando nuestra respuesta.</p>
          <p>Recuerda verificar tu carpeta de Spam para no perder por accidente ninguno de nuestros correos.</p>
        </div>
      </div>
    </>
    )}
  </>
  );
};

export default Contacto;
