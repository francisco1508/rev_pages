import React, { Component } from 'react';
import FormatoFecha from './FormatoFecha'
import FormatoDescripcion from './FormatoDescripcion'
import FormatoImagen from './FormatoImagen'

class ItemElement extends Component{
    render(){
        const {
            title_publish,
            name_publish,
            date_publish,
            description_publish,
            link_publish
        } = this.props;
        return(
            <div className="row classMarginItem">
                <div className="col-lg-4">
                    <FormatoImagen />
                </div>
                <div className="col-lg-8">
                    <div className="row centerClass" >
                    <div className="col-lg-12">
                        <FormatoFecha title_publish={title_publish} name_publish={ name_publish } date_publish={ date_publish }/>
                    </div>
                       
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <FormatoDescripcion description_publish={ description_publish } link_publish={ link_publish } />
                    </div>
                    
                    </div>
                
                </div>
            </div>
        );
    }
}

export default ItemElement;