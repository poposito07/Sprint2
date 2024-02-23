import React from 'react';
import SearchBar from '../Atomos/SearchBar';
import MenuItem from '../Moleculas/MenuItem';

import './Menu.css'; // Archivo CSS para estilos

const Menu = () => {
  return (
    <div className="menu">
      <div className="brand">CampusLink</div>
      <SearchBar />
      <nav>
        <ul>
          <MenuItem label="Inicio" link="#" />
          <MenuItem label="Artículos" link="#" />
          <MenuItem label="Grupos" link="#" />
          <MenuItem label="Comunicados" link="#" />
        </ul>
      </nav>
      <div className="profile">
        <a href="#">Mi perfil</a>
        <img src="path_to_configuration_icon.png" alt="" className="config-icon" />
      </div>
    </div>
  );
}

export default Menu;
