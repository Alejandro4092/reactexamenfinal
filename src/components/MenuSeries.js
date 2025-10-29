import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class MenuApuestas extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        this.loadSeries();
    }

    loadSeries = () => {
        const url = Global.apiPersonajesA;
        // intentar obtener la lista de series desde la API
        axios.get(url + 'api/series')
            .then(response => {
                this.setState({ series: response.data });
            })

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
             
                <div className="container-fluid">
                     <NavLink className="nav-link" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createpersonaje">Create Personaje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cambiarpersonajeserie">Cambiar Personaje de series</NavLink>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.series.map((series, index) => {
                                            const seriesId = series.idSerie;

                                            return (
                                                <li key={index} >
                                                    <NavLink className="dropdown-item" to={"/series/" + (seriesId || '')}>
                                                        {series.nombre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
