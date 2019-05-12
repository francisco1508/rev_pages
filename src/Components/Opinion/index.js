import React, { Component } from 'react';
import ItemElement from '../Global/item/Item'
import IconAnalisis from '../Global/images/OpinionImages/icon_analysis.png'
import IconColumna from '../Global/images/OpinionImages/icon_newspaper.png'


class Opinion extends Component{
    /*
    <FormatoFecha name_publish="Francisco Juarez" date_publish="01 Marzo 2019"/>
    */
    render(){
        return(
            <div className="">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 classMarginOptions">
                    <div class="btn-group-vertical">
                        <button type="button" className="btn upperLetter tipoBoton">
                        <img className="iconElementPolitica" src={ IconAnalisis } alt=""/>
                        An&Aacute;lisis 
                        </button>
                        <button type="button" className="btn upperLetter tipoBoton">
                        <img className="iconElementPolitica" src={ IconColumna } alt=""/>
                        Columna
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="marcoDiv">
                        <ItemElement 
                            title_publish="Titulo de prueba"
                             name_publish="Francisco Juarez"
                             date_publish="01-Enero-2019"
                             description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
                             link_publish="https://www.facebook.com/"
                        />
                        <ItemElement
                        title_publish="Un titulo muy largo"
                             name_publish="Francisco Juarez"
                             date_publish="01-Enero-2019"
                             description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
                             link_publish="https://www.facebook.com/"
                        />
                        
                    </div>
                </div>   
            </div>
            </div>

        );
    }
}

export default Opinion;