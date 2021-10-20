import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import image1 from './../images/home1.jpg';

const Home = () => {
  return (
    <>
    <div className="bg-info">
      <div className="d-flex justify-content-center pt-4 pb-2">
        <h2>Lleva un registro de tus gasto</h2>
      </div>
      <div className="text-center pb-2">
        <h4 className="text-white">El control de tus gastos nunca había sido tan sencillo.</h4>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="col-4 pb-4">
          <img src={image1} className="img-fluid img-thumbnail" />
        </div>
      </div>
    </div>
    <div className="row align-items-start">
      <div className="col">
        <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 ms-1 mt-2">
          <div className="d-flex justify-content-center">
            <Icon.Easel size={70} color="#0BCBC5" />
          </div>
          <h3 className="text-center pt-2">Fácil de usar</h3>
          <p className="pb-4">Simplemente registrate en nuestro sitio web de manera gratuita y comienza a disfrutar de nuestras herramientas para el contro de tus gastos.</p>
        </div>
      </div>
      <div className="col">
        <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 mt-2">
          <div className="d-flex justify-content-center">
            <Icon.Hurricane size={70} color="#0BCBC5"/>
          </div>
          <h3 className="text-center pt-2">Dinámica</h3>
          <p className="pb-5">Creado con la mejor tecnología para que puedas ver en tiempo real el análisis de tus gastos mediante nuestro intuitivo dashboard.</p>
        </div>
      </div>
      <div className="col">
        <div className="card border border-2 shadow-lg p-3 mb-5 bg-body rounded px-5 py-3 me-1 mt-2">
          <div className="d-flex justify-content-center">
            <Icon.FileEarmarkRichtext size={70} color="#0BCBC5" />
          </div>
          <h3 className="text-center pt-2">Intuitivo</h3>
          <p>Nuestra plataforma se desarrollo pensando en las necesidades del usuario, haciendo su interfaz intuitiva y fácil de usar. Además de permitir exportar tus datos a otras plataformas como Excel para su posterior análisis.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
