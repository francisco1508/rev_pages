import React, { Component } from 'react';
import ImagenArticulo from '../images/img_opinion.png'


class Opinion extends Component{

    render(){
        /*
        <FormatoDescripcion description_publish={ description_publish } link_publish={ link_publish } />
        */
        const {
            name_opinion,
            text_opinion
        } = this.props;
        return(
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <img src={ ImagenArticulo } className="" alt=""/>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9">
                    <p className="text-opinion caja-texto-opinion">
                        { text_opinion }
                    </p>
                    <p className="text-opinion caja-texto-autor">
                        { name_opinion }
                    </p>
                </div>
            </div>

            // <div className="row classMarginItem">
            //     <div className="col-lg-3">
            //         <ImagenOpinion />
            //     </div>
            //     <div className="col-lg-9">
            //         <div className="row">
            //             <div className="col-lg-12">
            //                 <div className="row">
            //                     <p className="text-opinion">
            //                         { text_opinion }
            //                     </p>
            //                 </div>
            //                 <div className="row">
            //                     { name_opinion }
            //                 </div>
            //             </div>
                    
            //         </div>
                
            //     </div>
            // </div>
        );
    }
}

export default Opinion;