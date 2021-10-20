import React from 'react';
import {Item} from './Item';
import {FileEarmarkArrowDown} from 'react-bootstrap-icons';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export function Tabla({ todos }){
  return(
    <>
    <table className="table table-bordered" id="tablaGastos">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Cantidad $</th>
          <th scope="col">Categorias</th>
        </tr>
      </thead>
      <tbody>
          {todos.map((todo)=>(
            <Item key = {todo.id} todo={todo} />
          ))}
      </tbody>
    </table>
    <div className="d-flex align-items-start flex-column">
    <div className="mb-auto p-2">
      <FileEarmarkArrowDown size={30}/>
      <ReactHTMLTableToExcel
        id="botonExcel"
        className="btn btn-success"
        table="tablaGastos"
        filename="Gastos"
        sheet="Hoja 1"
        buttonText="Exportar Excel"
      />
      </div>
    </div>
    </>
  );
}
