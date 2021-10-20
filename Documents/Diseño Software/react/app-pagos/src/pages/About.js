import React, { useState } from 'react';
import image1 from './../images/multiPlat.png';
import * as Icon from 'react-bootstrap-icons';

const About = () =>{
  return (
  <>
  <div className="bg-info">
    <div className="d-flex justify-content-center p-4">
      <h2>Somos más que una aplicación</h2>
    </div>
    <div className="d-flex justify-content-center ">
      <div className="col-4 pb-4">
        <img src={image1} className="img-fluid img-thumbnail" />
      </div>
    </div>
    <div className="text-center pb-2">
      <h4 className="text-white">Somos una herramienta que te permitirá tener un control exclusivo de tus gasto de manera rápida y accesible desde cualquier dispositivo. </h4>
    </div>
  </div>

  <div className="row align-items-start">
    <div className="col">
      <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 ms-1 mt-2">
        <div className="d-flex justify-content-center">
          <Icon.Award size={70} color="#0BCBC5" />
        </div>
        <h3 className="text-center pt-2">Top 10</h3>
        <p className="pb-5">Entre las mejores aplicaciones para el manejo de gastos.</p>
      </div>
    </div>
    <div className="col">
      <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 mt-2">
        <div className="d-flex justify-content-center">
          <Icon.BookmarkHeart size={70} color="#0BCBC5"/>
        </div>
        <h3 className="text-center pt-2">Personalizada</h3>
        <p className="pb-4">Se desarrollo pensando tanto para el uso personal como para empresas por lo que su escalabilidad no tiene límites.</p>
      </div>
    </div>
    <div className="col">
      <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 me-1 mt-2">
        <div className="d-flex justify-content-center">
          <Icon.Brush size={70} color="#0BCBC5" />
        </div>
        <h3 className="text-center pt-2">Instantanea</h3>
        <p>Gracias al tipo de tecnología empleada para su desarrollo, todos los cambios realizados se ven de manera directa sin la necesidad de refrescar la pagina.</p>
      </div>
    </div>
  </div>

  </>
);
};


export default About;
