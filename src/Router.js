import React, { Component } from 'react'
import { BrowserRouter, Routes,Route,useParams } from 'react-router-dom'
import MenuSeries from './components/MenuSeries'
import InfoSeries from './components/InfoSeries.js';
import Home from './components/Home';
import CreatePersonaje from './components/CreatePersonaje';
import CambiarPersonajeSerie from './components/CambiarPersonajeSerie';

export default class Router extends Component {
  render() {
    //Funcion para pasar los props por URL
    function Series() {
      let params = useParams();
      return <InfoSeries idSerie={params.idSerie} />;
    }

    return (
     <BrowserRouter>
     <MenuSeries />
     <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/series/:idSerie' element={ <Series/> } />
        <Route exact path='/createpersonaje' element={<CreatePersonaje />} />
        <Route exact path='/cambiarpersonajeserie' element={<CambiarPersonajeSerie />} />

     </Routes>
     
     </BrowserRouter>
    )
  }
}
