import React, { Component } from 'react';
import ImageVideo from '../Global/images/TelevisionImages/img_video.jpg'
import ImagePlay from '../Global/images/TelevisionImages/play-button.png'

class Programa extends Component{
    
    render(){
        return(
            <div className="row container_programa">
                <div className="col-md-4 col-lg-4">
                    <div className="container_image">
                        <img className="class_image_tv" src={ ImageVideo } alt=""/>
                        <div className="class_tag_tv">En vivo</div>
                        <img className="class_play_tv" src={ ImagePlay } alt=""/>
                    </div>
                </div>
                <div className="section_reportaje col-md-8 col-lg-8">
                    <div className="row">
                        <div className="container_title_reportaje">
                            <div className="title_television">Titulo del video</div>
                        </div>
                        
                        <div className="container_info_reportaje">
                            
                            <div className="name_user_reportaje">Subido por Desarrolladores</div>
                            
                            <div className="name_user_reportaje">Hace 12 horas</div>
                        </div>
                    </div>
                    <div className="row container_parrafo">
                        <p className="parrafo_television">Note that because we want to be able to POST to this view from clients that won't have a CSRF token we need to mark the view as csrf_exempt. This isn't something that you'd normally want to do, and REST framework views actually use more sensible behavior than this, but it'll do for our purposes right now.

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programa;