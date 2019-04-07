import React, { Component } from 'react';
import './css/Global.css'
import './css/Grid.css'
import ImagenUno from './images/imagen1.jpg'
import ImagenDos from './images/imagen2.jpg'
import ImagenTres from './images/imagen3.jpg'

class Carrusel extends Component{
    render(){
        return(
        <div className="row margin-carousel">
            <div className="col-12 col-xs-12 col-md-12 col-lg-12">
                <div id="demo" className="carousel slide center-block" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ ImagenUno } alt="Los Angeles" />
                        </div>
                        <div className="carousel-item">
                            <img src={ ImagenDos } alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src={ ImagenTres } alt="New York" />
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
        );
    }
}

export default Carrusel;