import React, { Component } from 'react';
import './style_politica.css';
import IconInternacional from '../Global/images/PoliticaImages/icon_internacional.png'
import IconNacional from '../Global/images/PoliticaImages/icon_flag.png'
import IconLocal from '../Global/images/PoliticaImages/icon_local.png'
import TipoElementosPoliticas from './TipoElementosPolitica'

class Politica extends Component{
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div class="btn-group-vertical">
                        <button type="button" className="btn upperLetter tipoBoton">
                        <img className="iconElementPolitica" src={ IconInternacional } alt=""/>
                        Internacional
                        </button>
                        <button type="button" className="btn upperLetter tipoBoton">
                        <img className="iconElementPolitica" src={ IconNacional } alt=""/>
                        Nacional
                        </button>
                        <button type="button" className="btn upperLetter tipoBoton">
                        <img className="iconElementPolitica" src={ IconLocal } alt=""/>
                        Local
                        </button>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="marcoDiv">
                        <TipoElementosPoliticas />
                        <TipoElementosPoliticas />
                        <TipoElementosPoliticas />
                        <TipoElementosPoliticas />
                        <TipoElementosPoliticas />
                    </div>
                </div>   
            </div>
        );
    }
}

export default Politica;