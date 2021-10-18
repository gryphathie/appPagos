import React from 'react';


const Table = () => {
  const gastos = [
    {id:0, fecha:"06/10/2021", hora:"12:00", nota:"Super", cantidad:350, categoria:"Comida"}
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
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Categorias</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map(renderGasto)}
      </tbody>
        <Button className="btn-danger"> Prueba </Button>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Table;
