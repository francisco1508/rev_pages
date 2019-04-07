import React, { Component } from 'react';
import IconVisto from '../../Global/images/img_mas_visto.png'

class ElementosColumnaTres extends Component{
    render(){
        return(
            <div>
                <div className="imageElementsCss">
                    <img className="mx-auto d-block imageElementsCss" 
                        src={ IconVisto } 
                        alt=""
                    />
                    <div className="cajaTextoImagenVisto">
                        <h4 className="ajustTitle">Hola</h4>
                        <p className="ajusteParrafo">Nada que perder amigo por que la verdad no me agrada para nada.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElementosColumnaTres;