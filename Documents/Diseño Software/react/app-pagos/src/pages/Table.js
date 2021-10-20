import React from 'react';
import Button from 'react-bootstrap/Button';


const Table = (props) => {
  const gastos = [
    {id:0, fecha:"01/10/2021", hora:"10:00", nota:"Chicles", cantidad:10, categoria:"Comida"},
    {id:1, fecha: props.fecha, hora: props.hora, nota: props.nota, cantidad: props.cantidad, categoria: props.categoria},
  ]

  const renderGasto = (gasto, index) => {
    return (
      <tr key={index}>
        <td>{gasto.id}</td>
        <td>{gasto.fecha}</td>
        <td>{gasto.hora}</td>
        <td>{gasto.nota}</td>
        <td>{gasto.cantidad}</td>
        <td>{gasto.categoria}</td>
      </tr>
    )
  }
  return (
    <>
    <div className="card border border-2 shadow-lg p-3 mb-5 bg-bogy rounded px-5 py-3 mx-5">
      <h2 className="text-center py-3">Tabla de pagos registrados:</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad $</th>
            <th scope="col">Categorias</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map(renderGasto)}
        </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
