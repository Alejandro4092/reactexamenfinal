import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class InfoEquipo extends Component {
    url = Global.apiPersonajesA;

    state = {
        info: [],
        personajes: [],
        mostrarSeries: false

    }

    LoadInfo = () => {
        let id = this.props.idSerie;
        var request = "api/series/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                info: response.data,
                mostrarSeries: false
                
            });
        });
    }

    mostrarPersonajes = () => {
        let id = this.props.idSerie;
        var request = "/api/Series/PersonajesSerie/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data,
                mostrarPersonajes: true,
                mostrarSeries: false
            });
        })
    }
    VolverInfo = () => {
        this.setState({ mostrarPersonajes: false });
    }
    

  

    componentDidMount = () => {
        this.LoadInfo();
    }

    // 👇 Se ejecuta cada vez que cambian las props
    componentDidUpdate(prevProps) {
        // Si el idEquipo cambió, recargamos los datos
        if (prevProps.idSerie !== this.props.idSerie) {
            this.LoadInfo();
            this.setState({ mostrarPersonajes: false });
        }
    }

    render() {
       const { info, personajes, mostrarPersonajes,mostrarSeries } = this.state;

        return (
            <div className="container mt-3">
                {!mostrarSeries && (
                    <div>
                      <ul>
                        
                        <li><img src={info.imagen} width="300" /></li>
                        <li>{info.nombre}</li>
                        <p>IMDB :{info.puntuacion}</p>

                        <button className="btn btn-info me-2" onClick={this.mostrarPersonajes}>
                            Personajes
                        </button>

                    
                        </ul>
                    </div>
                )}
                 {mostrarPersonajes && (
                    <div>
                        <h2>Personajes de {info.nombre}</h2>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th></th>
                                </tr>
                            </thead>
                             <button className="btn btn-primary" onClick={this.VolverInfo}>
                            Volver
                        </button>
                            <tbody>
                                {personajes.map((personaje, index) => (
                                    <tr key={index}>
                                        <td>{personaje.nombre}</td>
                                        <td><img src={personaje.imagen} width="150" /></td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                       
                    </div>
                )}
            </div>

               

        );
    }
}
