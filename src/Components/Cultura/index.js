import React, { Component } from 'react';
import Opinion from '../Global/opinion/Opinion'
import ItemElement from '../Global/item/Item'

class Cultura extends Component{
    
    render(){

        return(
            <div className="">
            <div className="row">
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
                        title_publish="Titulo de prueba"
                        name_publish="Francisco Juarez"
                        date_publish="01-Enero-2019"
                        description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
                        link_publish="https://www.facebook.com/"
                    />
                    <ItemElement 
                        title_publish="Titulo de prueba"
                        name_publish="Francisco Juarez"
                        date_publish="01-Enero-2019"
                        description_publish="Con la propiedad justify-content: center hacemos que se centre horizontalmente, mientras que con align-items: center hacemos lo propio verticalmente. Cabe resaltar que estas propiedades sólo aplican en caso que el padre sea de mayor tamaño que el hijo. De hecho, si queremos que el hijo esté centrado en toda la pantalla deberemos asignarle esas dimensiones al padre."
                        link_publish="https://www.facebook.com/"
                    />
                </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                     <Opinion
                        name_opinion="Francisco Juarez "
                        text_opinion="Pienso luego existo... o eso creo :/"
                     />
                </div>
                </div>
            </div>
        );
    }
}

export default Cultura;