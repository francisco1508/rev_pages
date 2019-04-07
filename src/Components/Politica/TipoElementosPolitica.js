import React, { Component } from 'react';
import IconImagePolitica from '../Global/images/img_card_feed.png'
import DateFormat from './dateFormat'

class TipoElementosPoliticas extends Component{
    render(){
        return(
            <div >
                <div className="divNoticiasPoliticasImagen">
                    <img
                        className="mx-auto d-block imageElementsCss"  
                        src={IconImagePolitica } 
                        alt=""/>
                </div>
                <div className="divNoticiasPoliticas">
                    <div className="encabezadoNoticias">
                    <h5>Titulo</h5>
                    <DateFormat name_publish="Francisco Juarez" date_publish="01 Marzo 2019"/>
                    </div>
                    <div className="descripcionNoticias">
                    <p>Esto es por que solamentes se esta realizando unas pruebas, ademas de que se tiene un diseño responsive para que se ajuste a todos los dispositivos.</p>
                    </div>
                    <div>
                        <a href="https://www.facebook.com">Ver mas...</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default TipoElementosPoliticas;