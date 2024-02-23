import React from 'react';
import './BottomSection.css'; // Archivo CSS para estilos

function BottomSection() {
  return (
    <div>
      <div className="contenedor-boton">
        <div className="encabezado">
          <div className="imagen-container">
            <img src="https://s3-alpha-sig.figma.com/img/7ce9/f5f0/727e1ca544fe2435f797c34a264ba6ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbz~A1J0Cq4E6~hqbG7DcabCV~rN2CeZs1zwpYsqM3j6n1oZ0FT54VKSsAAb0FPdH6PzjYECA25ozfeXUt6qAHQmHAfNUPHhQRr7KKfNBVDEdrMn4bXZKTQlscpn~Onaxh0INBJTKrSXyzLqZqOuhAmaFrv00ai18NAOnsrydvSGhBTKLoc3YvhGfeEHUGsDdxT2cn9g4jKmfHpQmf2XrDEZYhb5Zpa0n2jpSdUDvFQ4tz3FsrkY~MULIVc8qI7zA88Vu4~nZOQiOem--qtNwHFoqEZnfudMohvkWE9~~kE~K0sd7hRBEz9W8a3gONz87mSuSoxxXMCIVvGgY2Gb8g__" className="imagen" alt="Imagen de perfil" />
          </div>
          <div className="barra-busqueda">
            <input type="text" placeholder="Buscar..." />
          </div>
        </div>
        <div className="opciones">
          <button className="opcion">
            <span>Contenido multimedia</span>
          </button>
          <button className="opcion">
            <span>Evento</span>
          </button>
          <button className="opcion">
            <span>Escribir artículo</span>
          </button>
        </div>
      </div>
      <div className="filtro">
        <p>Filtrar por:</p>
        <div className="categoria">
          <p>Categorías: eventos</p>
        </div>
        <div className="etiqueta">
          <p>Etiquetas: ciclo 2023-2024</p>
        </div>
      </div>
      <div className="cuadro-grande">
        <div className="imagen-circular">
          {/* Aquí va la imagen circular */}
          <img src="https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irh4dGDJBZHkjxbRwMlqlLA1Kt0LKI3fYpucxwr5mV5TepeIOZ8wlj2BxM9k2djrWZdq~cm31Oz6o2WmogFGskGjSlEmgSnkHVYMfry4YZslt6aZsnu7cFgKLKTX8qR3hzUocnW9beuZJ9P83dFIuOlj3SnW~vCW3gn3lJ4sFQQpzlxoOvcsiGfiNWJesW8RN-doczbSCYBwNzxsKcI4JqSbAN3~nCPnqrjhiF1Af6gJL7SdRSNTMNhjJXoFGA-XoLgjYZAAE2R61rjmRgIP0~V446nv5z9UY0VyhLaiP0Y0J~BlX-IeWx7h5a8y4a~2OYusBlRGD-F6V01xbyg4qg__" alt="Imagen de perfil" />
        </div>
        <div className="informacion">
          <div className="nombre">Nombre del usuario</div>
          <div className="tiempo">Hace 4 horas</div>
          <div className="imagen-inferior">
            {/* Aquí va la imagen inferior */}
            <img src="https://s3-alpha-sig.figma.com/img/062c/5214/2b13f65cb595899054d25579108619e2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQip6ICD-aSuvhKEc75noj3OZHnB-FZngRdYUUMMuY9qk5yG9AQuZPw5T-Y-ajtekuGPthEAAjNM2lOWBZeTNxKElvkPs-aJxt-Elkvq-fN5tMiJN3I5LOdPmr806RsIwYWPoXdfB8PUF7dhXRA1sKanIB7BOXOQBQ8kajh5yfFmb4--EPzqPDSU6Fy7ggjkst8AleCO9xrP4FbFG2gCakN8zdDBOIfFw8lxAflQFDti3hNZao8gJM-HUrfFtH2RCfF7K2pR9f0Hpa~xbpeFF8Uz~JbZjpPYe22dwHj4QL2jfNRLraZRmitCBYLwvRtepbaH-Ies-RMXK08uSXzMJg__" alt="Imagen inferior" />
          </div>
        </div>
        <div className="reacciones">  
          <div className="reaccion">
            <i className="far fa-thumbs-up"></i>
            <span>Me gusta</span>
          </div>
          <div className="reaccion">
            <i className="far fa-comment"></i>
            <span>Comentario</span>
          </div>
          <div className="reaccion">
            <i className="far fa-share-square"></i>
            <span>Compartir</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
