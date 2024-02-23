// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Cuadro from './assets/Componentes/Atomos/Cuadro';
import TextImageBox from './assets/Componentes/Moleculas/TextImageBox'; // Asegúrate de importar correctamente el componente
import BottomSection from './assets/Componentes/Organismo/BottomSearchBox';
import Menu from './assets/Componentes/Organismo/Menu';


import './index.css'; // Archivo CSS para estilos globales

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Menu />
      <BottomSection />
      <Cuadro />  
      <TextImageBox/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
