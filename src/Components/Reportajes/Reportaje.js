import React, { Component } from 'react';
import ImagenReportaje from '../Global/images/img_card_feed.png'
import iconUser from '../Global/images/icon_user.png'
import iconCalendar from '../Global/images/icon_calendar.png'


class Reportaje extends Component{
    
    render(){
        return(
            <div className="row div_contenedor_reportaje">
                <div className="imagen_reportaje col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <img
                        className="imagen_perfil_reportaje"
                        src={ ImagenReportaje }
                        alt=""
                    > 
                    </img>
                </div>
                <div className="section_reportaje col-md-8 col-lg-8">
                    <div className="row">
                        <div className="container_title_reportaje">
                            <div className="title_reportaje">Aqui va el titulo</div>
                        </div>
                        
                        <div className="container_info_reportaje">
                            <div className="icon_user_reportaje">
                                <img className="img_style_reportaje" src={iconUser} alt=""/>
                            </div>
                            <div className="name_user_reportaje">Reportero Maestro</div>
                            <div className="icon_calendar_reportaje">
                                <img className="img_style_reportaje" src={iconCalendar} alt=""/>
                            </div>
                            <div className="name_user_reportaje">01-Enero-2019</div>
                        </div>
                    </div>
                    <div className="row container_parrafo">
                        <p className="parrafo_reportaje">Note that because we want to be able to POST to this view from clients that won't have a CSRF token we need to mark the view as csrf_exempt. This isn't something that you'd normally want to do, and REST framework views actually use more sensible behavior than this, but it'll do for our purposes right now.

                        </p>
                    </div>
                    <div className="row">
                        <a className="a_link_more" href="https://www.facebook.com" >Ver m&aacute;s</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reportaje;