import React from 'react';

export function NavBar({ imageCount, setImageCount }) {
  const handleImageCountChange = (e) => {
    setImageCount(Number(e.target.value));
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./public/nasa-logo.svg" alt="Nasa-ico" width="50" height="44" />
        </a>
        <h1>Galería de Imágenes</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title w-100 d-flex justify-content-center align-items-center" id="offcanvasDarkNavbarLabel"><i className="fa-solid fa-satellite-dish m-2"></i></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p>Generador de imágenes aleatorias utilizando la API de la NASA.</p>
            <form className="d-flex" role="search">
              <h6 className='col-6 d-flex align-items-center mt-2'>Cantidad de imágenes:</h6>
              <input 
                className="form-control" 
                type="number" 
                value={imageCount} 
                onChange={handleImageCountChange} 
                placeholder="Número de imágenes" 
                aria-label="Image Count" 
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
