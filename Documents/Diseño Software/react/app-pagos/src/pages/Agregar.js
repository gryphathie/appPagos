import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from './Table';

const Agregar = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [nota, setNota] = useState("");
  const [categoria, setCategoria] = useState("");

  const onChange = (e) => {
    if (e.target.name === "fecha"){
      setFecha(e.target.value)
    } else if (e.target.name === "hora"){
      setHora(e.target.value)
    } else if (e.target.name === "cantidad"){
      setCantidad(e.target.value)
    } else if (e.target.name === "nota"){
      setNota(e.target.value)
    } else if (e.target.name === "categoria"){
      setCategoria(e.target.value)
    }
  }

  const onSubmite = (e) =>{
    e.preventDefault();
    if(fecha !== "" && hora !== "" && cantidad > 0 && categoria !== ""){
      alert("Gasto registrado correctamente");
    } else {
      alert("Campos incompletos, verifica tu información");
    }

  }

  return (
    <>
    <Form onSubmit={onSubmite}>
    <div className="align-self-center py-2">
      <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 mx-5">
        <div className="d-flex flex-column justify-content-center">
        <div className="align-self-cente py-3">
          <h2 className="text-center">Registra un nuevo gasto:</h2>
        </div>

        <div className="row">
          <div className="col col-lg-3">
              <Form.Group size="lg" controlId="fecha">
                <Form.Label>Fecha: </Form.Label>
                <Form.Control
                  autoFocus
                  name="fecha"
                  type="date"
                  value={fecha}
                  onChange={onChange}
                  />
                </Form.Group>
              </div>
              <div className="col col-lg-3">
                <Form.Group size="lg" controlId="hora">
                  <Form.Label>Hora: </Form.Label>
                  <Form.Control
                    autoFocus
                    name="hora"
                    type="time"
                    value={hora}
                    onChange={onChange}
                    />
                </Form.Group>
              </div>
              <div className="col col-lg-3">
                <Form.Group size="lg" controlId="cantidad">
                  <Form.Label>Monto: </Form.Label>
                  <Form.Control
                    autoFocus
                    name="cantidad"
                    type="number"
                    placeholder="$"
                    value={cantidad}
                    onChange={onChange}
                    />
                </Form.Group>
              </div>
            </div>
            <div className="row py-4">
              <div className="col col-lg-5">
                <label>Descripción:</label>
                <textarea className="form-control" id="nota" name="nota" rows="3" onChange={onChange}></textarea>
              </div>
              <div className="col col-lg-3 ms-5">
                <label>Categoría:</label>
                <select className="form-control" id="categoria" name="categoria" onChange={onChange}>
                  <option> </option>
                  <option>Comida</option>
                  <option>Entretenimiento</option>
                  <option>Farmacia</option>
                  <option>Ropa</option>
                  <option>Transporte</option>
                </select>
              </div>
            </div>
            <Button variant="danger" block size="lg" type="submit">Agregar</Button>
          </div>
      </div>
    </div>
    </Form>
    <Table />
    </>
  );

}

export default Agregar;
