import React from 'react';
import './Cuadro.css';

const Cuadro = () => {
  return (
    <div className="cuadro-container">
      <div className="fondo-con-imagen-container">
        <div className="imagen-circular-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/7ce9/f5f0/727e1ca544fe2435f797c34a264ba6ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbz~A1J0Cq4E6~hqbG7DcabCV~rN2CeZs1zwpYsqM3j6n1oZ0FT54VKSsAAb0FPdH6PzjYECA25ozfeXUt6qAHQmHAfNUPHhQRr7KKfNBVDEdrMn4bXZKTQlscpn~Onaxh0INBJTKrSXyzLqZqOuhAmaFrv00ai18NAOnsrydvSGhBTKLoc3YvhGfeEHUGsDdxT2cn9g4jKmfHpQmf2XrDEZYhb5Zpa0n2jpSdUDvFQ4tz3FsrkY~MULIVc8qI7zA88Vu4~nZOQiOem--qtNwHFoqEZnfudMohvkWE9~~kE~K0sd7hRBEz9W8a3gONz87mSuSoxxXMCIVvGgY2Gb8g__"
            alt="Imagen circular"
            className="imagen-circular"
          />
        </div>
        <div className="informacion-container">
          <strong>Joanna Rosenbaum</strong>
          <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
          <div className="recuadro-combinado">
            <div className="recuadro">
              <span>24</span>
              <span>Publicaciones</span>
            </div>
          </div>
          <div className="recuadro-combinado">
            <div className="recuadro">
              <span>136</span>
              <span>Artículos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuadro;
