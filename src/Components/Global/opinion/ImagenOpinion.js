import React, { Component } from 'react';
import ImagenArticulo from '../images/img_opinion.png'

class ImagenOpinion extends Component{
   
    render(){
        const { pic_publish } = this.props;
        return(
            <div className="imagenArticulo">
                <img src={ ImagenArticulo } className="img-fluid" alt=""/>
            </div>
        );
    }
}

export default ImagenOpinion;