import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class CreateApuesta extends Component {
    url= Global.apiPersonajesA;
  cajaidPersonaje = React.createRef();
  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  cajaidSerie = React.createRef();

  insertarPersonaje = (event) => {
    event.preventDefault();
    const request = "api/personajes";

    const nuevoPersonaje = {
      idPersonaje: parseInt(this.cajaidPersonaje.current.value),
      nombre: this.cajaNombre.current.value,
      imagen: this.cajaImagen.current.value,
      idSerie: parseInt(this.cajaidSerie.current.value)
    };

    axios.post(this.url + request, nuevoPersonaje).then(response => {
        console.log("Personaje insertado correctamente"+response.data);
     

    });
  }


  render() {
    return (
      <div className="container mt-4">
        <h2>Nuevo Personaje</h2>
        <form onSubmit={this.insertarPersonaje}>
            <div className="mb-3">
            <label className="form-label">IDpersonaje</label>
            <input type="text" className="form-control" ref={this.cajaidPersonaje} />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" ref={this.cajaNombre} />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input type="text" className="form-control" ref={this.cajaImagen}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Id Serie</label>
            <input type="text" className="form-control" ref={this.cajaidSerie}  />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
          <NavLink to="/" className="btn btn-secondary ms-2">Volver</NavLink>
         
        </form>
      </div>
    )
  }
}
