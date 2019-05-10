import React, { Component } from 'react';
import ImagenArticulo from '../images/img_card_feed.png'

class FormatoImagen extends Component{
   
    render(){
        const { pic_publish } = this.props;
        return(
            <div className="">
                <img src={ ImagenArticulo } className="elements-image full-width" alt=""/>
            </div>
        );
    }
}

export default FormatoImagen;