import React from 'react';
import {Item} from './Item';
import {FileEarmarkArrowDown} from 'react-bootstrap-icons';
import {Trash} from 'react-bootstrap-icons';
import {XCircle} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export function Tabla({ todos, borrarElemento, handleClearAll }){
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
          <th scope="col"><XCircle size={20}/></th>
        </tr>
      </thead>
      <tbody>
          {todos.map((todo)=>(
            <Item key = {todo.id} todo={todo} borrarElemento={borrarElemento}/>
          ))}
      </tbody>
    </table>
    <h3 className="py-2">Total: $  </h3>
    <div className="row">
      <div className="col-sm">
        <ReactHTMLTableToExcel
          id="botonExcel"
          className="btn btn-success"
          table="tablaGastos"
          filename="Gastos"
          sheet="Hoja 1"
          buttonText="Exportar Excel"
        />
      </div>
      <div className="col-6">
      </div>
      <div className="col">
      </div>
      <div className="col-sm align-right">
        <Button variant="dark" block onClick={handleClearAll}><Trash size={25}/> Borrar registro</Button>
      </div>
    </div>

    </>
  );
}
