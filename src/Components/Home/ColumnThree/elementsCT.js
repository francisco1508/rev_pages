import React, { Component } from 'react';
import IconVisto from '../../Global/images/img_mas_visto.png'

class ElementosColumnaTres extends Component{
    render(){
        return(
            <div className="elements-image">
                <img className="mx-auto d-block full-width" 
                    src={ IconVisto } 
                    alt=""
                />
                <div className="caja-texto-tmagen-visto">
                    <h4 className="caja-texto-ajuste-title">Hola</h4>
                    <p className="caja-texto-ajuste-parrafo">
                    Nada que perder amigo por que la verdad no me agrada para nada. Pero al final se termina la magia como todo.
                    </p>
                </div>
            </div>
        );
    }
}

export default ElementosColumnaTres;