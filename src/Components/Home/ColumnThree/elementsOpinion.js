import React, { Component } from 'react';
import IconPerfil from '../../Global/images/img_opinion.png'

class ElementosOpinion extends Component{
    render(){
        return(
            <div className="titleSection">
                <div className="alignDiv">
                    <img className="classIconoPerfil" src={ IconPerfil } alt=""/>
                </div>
                <div className="alignDiv">
                <blockquote>
                    <p className="classOpinion">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    <small>- Ejemplo Autor</small>
                </blockquote>
                </div>
            </div>
        );
    }
}

export default ElementosOpinion;