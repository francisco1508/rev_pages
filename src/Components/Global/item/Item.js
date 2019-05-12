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
            <div className="row item-style-css">
                <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 padding-dropped-article">
                    <FormatoImagen />
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-dropped">
                            <FormatoFecha title_publish={title_publish} name_publish={ name_publish } date_publish={ date_publish }/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <FormatoDescripcion description_publish={ description_publish } link_publish={ link_publish } />
                        </div>
                    </div>
                </div>
            </div>
            // <div className="row classMarginItem">
            //     <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            //         <FormatoImagen />
            //     </div>
            //     <div className="col-lg-8">
            //         <div className="row centerClass" >
            //         <div className="col-lg-12">
            //             <FormatoFecha title_publish={title_publish} name_publish={ name_publish } date_publish={ date_publish }/>
            //         </div>
                       
            //         </div>
            //         <div className="row">
            //         <div className="col-lg-12">
            //             <FormatoDescripcion description_publish={ description_publish } link_publish={ link_publish } />
            //         </div>
                    
            //         </div>
                
            //     </div>
            // </div>
        );
    }
}

export default ItemElement;