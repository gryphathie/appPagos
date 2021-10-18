import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from "react-bootstrap/Button";

const gasto = [530, 200, 330, 860, 120];
const suma = 0;
const state = {
  labels: ['Comida', 'Entretenimiento', 'Farmacia',
           'Ropa', 'Transporte'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#E74C3C',
        '#E0FF1B',
        '#2FDE00',
        '#1BFFEE',
        '#A91BFF'
      ],
      hoverBackgroundColor: [
        '#E74C3C',
        '#E0FF1B',
        '#2FDE00',
        '#1BFFEE',
        '#A91BFF'
      ],
      data: gasto,
      hoverOffset: 10,
      //radius: 250,
      cutout: '80%',
    }
  ]
}

const Doughnu = (props) =>{
  const sumaGasto = gasto.reduce((a,b) => a + b);

  return (
    <>
    <div className="d-flex justify-content-center py-2" >
      <h1>- Bienvenido {props.name} -</h1>
    </div>
    <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 mx-5">
    <div className="d-flex justify-content-center py-3">
      <h2 className="border-bottom-0">Tus gastos del mes:</h2>
    </div>
      <div className="align-self-md-stretch">
        <Doughnut
          data={state}
          options={{aspectRatio:{width:100, height:100}}}
           />
         </div>
         <div className="align-self-center py-5">
           <div className="row">
             <div className="col">
                <h3>Total acumulado: </h3>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <h3 className="text-center"> ${sumaGasto}</h3>
             </div>
           </div>
         </div>
       </div>

    </>
  );
}

export default Doughnu;
