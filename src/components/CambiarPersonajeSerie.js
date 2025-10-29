import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class CambiarPersonajeSerie extends Component {
    url = Global.apiPersonajesA;
    selectSerie = React.createRef();
    selectPersonaje = React.createRef();
    state = {
        series: [],
        personajes: [],


    }

    LoadDatos = () => {

        var request = "api/series/"
        axios.get(this.url + request).then(response => {
            console.log(this.selectSerie.value)
            this.setState({
                series: response.data
            });
        });
        var request = "/api/personajes/";
        axios.get(this.url + request).then(response => {
            console.log(this.selectSerie.value)
            this.setState({
                personajes: response.data,

            });
        })
    }

    loadPersonajes = () => {
  
        
    }
   CambiarPersonajeSerie=(event)=>{
    event.preventDefault();
    const idPersonaje= this.selectPersonaje.current.value;
    const idSerie= this.selectSerie.current.value;
    var request="/api/Personajes/"+idPersonaje+"/"+idSerie;
    axios.put(this.url+request).then(response=>{
        console.log("Personaje cambiado de serie correctamente"+response.data)
    });
   }
   
    componentDidMount = () => {
        this.LoadDatos();
       
    }
    
    render() {
        return (
            <form>
                 <label>Seleccione una serie y un personaje </label>
                <select ref={this.selectSerie}>

                    {
                        this.state.series.map((series, index) => {
                            return (
                               
                                <option key={index} value={series.idSerie}>
                                    {series.nombre}
                                </option>
                            )
                        })
                    }

                    </select>
                    <select ref={this.selectPersonaje}>
                    
                    {
                        this.state.personajes.map((personajes, index) => {
                            return (
                               
                                <option key={index} value={personajes.idPersonaje}>
                                    {personajes.nombre}
                                </option>
                                
                               
                            )
                        })
                    }
             </select>
            


                <button className="btn btn-primary" onClick={this.CambiarPersonajeSerie}>
                    Cambiar Personaje de Serie
                </button>
            </form>
            
        )
    }
}
