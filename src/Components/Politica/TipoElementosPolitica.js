import React, { Component } from 'react';
import IconImagePolitica from '../Global/images/img_card_feed.png'
import DateFormat from './dateFormat'

class TipoElementosPoliticas extends Component{
    render(){
        return(
            <div className="elementoDescripcionDeNoticias">
                <div className="divNoticiasPoliticasImagen">
                    <img
                        className="elements-image"  
                        src={IconImagePolitica } 
                        alt=""/>
                </div>
                <div className="divNoticiasPoliticas">
                    <div className="contenedorDeNoticias">
                    <div className="encabezadoNoticias">
                    <h5 className="tituloDeElemento">Titulo</h5>
                    <DateFormat name_publish="Francisco Juarez" date_publish="01 Marzo 2019"/>
                    </div>
                    <div className="descripcionNoticias">
                    <p>Los artículos determinados en español son el, los, en masculino singular y plural, y la, las, en femenino singular y plural, respectivamente. Cuando un sustantivo va acompañado de un artíulo determinado, juntos forman un grupo nominal definido; es decir, hacen referencia a una entidad que se conoce o se puede identificar a partir de la información presente en el contexto.</p>
                    </div>
                    <div className="tituloDeElemento">
                        <a href="https://www.facebook.com">Ver mas...</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TipoElementosPoliticas;