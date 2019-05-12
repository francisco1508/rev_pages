import React, { Component } from 'react';
import Programa from './Programa'
import './styles_television.css'
import VideoHome from '../Home/ColumnOne/sectionVideoHome'

class Television extends Component{
    
    render(){
        return(
            <div className="container_margin_television">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            Recientes
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <a href="https://www.facebook.com">MOSTRAR MAS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            Mas vistos
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <a href="https://www.facebook.com">MOSTRAR MAS</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            Recomendados
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <VideoHome/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <a href="https://www.facebook.com">MOSTRAR MAS</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Television;