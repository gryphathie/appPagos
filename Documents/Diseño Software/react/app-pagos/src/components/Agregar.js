import React, {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      gastos: [
        { id:1, fecha:"06/10/2021",hora:"12:00",nota:"Super",cantidad:350,categoria:"Comida"}]
    }
  }
}

render(){
  return(
    <div>
      <h1>Tabla de gastos</h1>
    </div>
  )
}

export default Table
