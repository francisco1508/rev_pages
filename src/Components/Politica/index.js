import React, { Component } from 'react';
import './politica.css';
import IconInternacional from '../Global/images/PoliticaImages/icon_internacional.png'
import IconNacional from '../Global/images/PoliticaImages/icon_flag.png'
import IconLocal from '../Global/images/PoliticaImages/icon_local.png'
import ItemElement from '../Global/item/Item';

class Politica extends Component{
    
    render(){
        return(
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 padding-dropped-article-menu">
                        <div class="btn-group-vertical ">
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
                    <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 article-margin-top marcoDiv">
                        <ItemElement 
                            title_publish="Titulo de prueba"
                            name_publish="Francisco Juarez"
                            date_publish="01-Enero-2019"
                            description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
                            link_publish="https://www.facebook.com/"
                        />
                    </div>
                </div>
            </div>
            // <div className="container_margin_politica">
            // <div className="row">
            //     <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 classMarginOptions">
            //         <div class="btn-group-vertical">
            //             <button type="button" className="btn upperLetter tipoBoton">
            //             <img className="iconElementPolitica" src={ IconInternacional } alt=""/>
            //             Internacional
            //             </button>
            //             <button type="button" className="btn upperLetter tipoBoton">
            //             <img className="iconElementPolitica" src={ IconNacional } alt=""/>
            //             Nacional
            //             </button>
            //             <button type="button" className="btn upperLetter tipoBoton">
            //             <img className="iconElementPolitica" src={ IconLocal } alt=""/>
            //             Local
            //             </button>
            //         </div>
            //     </div>
            //     <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            //         <div className="marcoDiv">
            //             <ItemElement 
            //                 title_publish="Titulo de prueba"
            //                  name_publish="Francisco Juarez"
            //                  date_publish="01-Enero-2019"
            //                  description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
            //                  link_publish="https://www.facebook.com/"
            //             />

            //         </div>
            //     </div>   
            // </div>
            // </div>
        );
    }
}

export default Politica;