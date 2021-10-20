import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Doughnu from './Doughnu';
import {Tabla} from './Tabla';
import {v4 as uuidv4} from "uuid"

const Agregar = () => {
  const [todos, setTodos] = useState([
    {id:1, date:"01/10/2021", time:"10:00", note:"Ramen", quantity:530, category:"Comida"},
    {id:2, date:"01/10/2021", time:"10:00", note:"Cine", quantity:200, category:"Entretenimiento"},
    {id:3, date:"01/10/2021", time:"10:00", note:"Medicinas", quantity:330, category:"Farmacia"},
    {id:4, date:"01/10/2021", time:"10:00", note:"Chamarra", quantity:860, category:"Ropa"},
    {id:5, date:"01/10/2021", time:"10:00", note:"Uber", quantity:120, category:"Transporte"},

  ]);
  const todoDateRef = useRef();
  const todoTimeRef = useRef();
  const todoNoteRef = useRef();
  const todoQuaRef = useRef();
  const todoCatRef = useRef();

  const handleTodoAdd = () => {
    const date = todoDateRef.current.value;
    const time = todoTimeRef.current.value;
    const note = todoNoteRef.current.value;
    const quantity = todoQuaRef.current.value;
    const category = todoCatRef.current.value;
    if (date !== "" && time !== "" && note !== "" && quantity !== "" && category !== ""){

    setTodos((prevTodos) =>{
        return [...prevTodos, {id: uuidv4(), date, time, note, quantity, category}];
    });
    todoDateRef.current.value=null;
    todoTimeRef.current.value=null;
    todoNoteRef.current.value=null;
    todoQuaRef.current.value=null;
    todoCatRef.current.value=null;
  } else {
      alert("Campos incompletos, verifica tu información");
  }
};

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
    <Doughnu todos={todos} />
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
                  ref= {todoDateRef}
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
                    ref= {todoTimeRef}
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
                    ref= {todoQuaRef}
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
                <textarea className="form-control" id="nota" ref= {todoNoteRef} name="nota" rows="3" onChange={onChange}></textarea>
              </div>
              <div className="col col-lg-3 ms-5">
                <label>Categoría:</label>
                <select className="form-control" id="categoria" ref= {todoCatRef} name="categoria" onChange={onChange}>
                  <option> </option>
                  <option>Comida</option>
                  <option>Entretenimiento</option>
                  <option>Farmacia</option>
                  <option>Ropa</option>
                  <option>Transporte</option>
                </select>
              </div>
            </div>

            <Button variant="danger" block size="lg" onClick={handleTodoAdd}>Agregar</Button>
          </div>
          <span className="border-bottom pt-5"></span>
          <div className="mt-3 py-3">
            <h3 className="text-center p-3"> Tabla de gastos: </h3>
            <Tabla todos={todos} />
          </div>

      </div>
    </div>
    </Form>
    </>
  );

}

export default Agregar;
