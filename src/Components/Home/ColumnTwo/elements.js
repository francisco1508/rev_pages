import React, { Component } from 'react';
import IconMuestra from '../../Global/images/img_card_feed.png'
import FormatoFecha from '../../Global/item/FormatoFecha'

class Elements extends Component{

    render(){

        /*
        <div className="text-center boxMiddleElements">
                    <div class="d-flex justify-content-center">
                        <div class="p-2 order-1 ">
                            <img className="" src={ IconUser } alt=""/>
                        </div>
                        <div class="p-2 order-2" >
                            <p className="pElementsUser">{ autor }</p>
                        </div>
                        <div class="p-2 order-3"></div>
                        <div class="p-2 order-4">
                            <img className="" src={ IconCalendar } alt=""/>
                        </div>
                        <div class="p-2 order-5">
                            <p className="pElementsUser">{ date_publish }</p>
                        </div>
                    </div>
                </div>
        */
        const { name_publish,
                date_publish,
                title_publish, 
                description,
                type_publish } = this.props;
        return(
            <div className="elements-css">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 elements-image">
                        <img className="full-width" 
                            src={ IconMuestra } 
                            alt=""
                        />
                        <div className="cajaTextoImagen">{ type_publish }</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 elements-image">
                        <FormatoFecha
                        name_publish={ name_publish } date_publish={ date_publish }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-borders-sides">
                        <h5 className="elements-title">{ title_publish }</h5>
                        <p className="elements-paragraph-short padding-borders-sides">
                            { description }
                        </p>
                        <a 
                            className="elements-paragraph-short padding-borders-sides" 
                            href="https://www.facebook.com/"
                        >Ver mas</a>
                    </div>
                </div>
            </div>
            // <div className="elementCSS">
            //     <div className="div_image_element_css">
            //         <img className="imageElementsCss" 
            //             src={ IconMuestra } 
            //             alt=""
            //         />
            //         <div className="cajaTextoImagen">{ type_publish }</div>
            //     </div>
                
            //     <FormatoFecha
            //         name_publish={ name_publish } date_publish={ date_publish }
            //     />

            //     <div className="boxInfoElements">
            //         <h5 className="titleElements">{ title_publish }</h5>
            //         <p className="paragraphElements">
            //             { description }
            //         </p>
            //         <a className="pElementsUser" href="https://www.facebook.com/">Ver mas</a>
            //     </div>
            // </div>
        );
    }
}

export default Elements;