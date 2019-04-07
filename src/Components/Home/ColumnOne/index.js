import React, { Component } from 'react';
import TvYRadio from './tvyradio'
import VideoHome from './sectionVideoHome'
import './style.css'

class ColumnOne extends Component{
    /*
   
                <div className="row">
                <div className="container classReportajes">
                    <h6 className="text-center ">Reportajes historicos</h6>
                    <p>
                    Por otro lado, si te encuentras en una situación en la que tienes que optimizar las hojas de estilo lo máximo posible, es probable que un framework CSS tenga demasiados elementos que no te sirvan o a los que siempre terminas reescribiendo desde cero (me pasa con los botones y los formularios). En esos casos, deberías reconsiderar el uso de un framework o usar una versión personalizada del mismo excluyendo los módulos que no te sirven. De hecho, mucha gente usa solamente la grilla de Bootstrap ya que están familiarizados con la misma y hacen todo lo demás por su cuenta.
                    </p>
                </div>
                    
                </div>
    */
    render(){
        return(
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4" >
                <div className="row rowSpace"></div>
                <div className="row">
                    <div className="titleSection">
                        <div className="alignDiv">
                            <div className="squareTitleSee">
                                <p className="titleFeed">TV Y RADIO</p> 
                            </div>
                        </div>
                        <div className="alignDiv">
                            <div className="squareLine">
                                <hr className="lineFeed"/>
                            </div>
                        </div>
                        <TvYRadio />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <VideoHome/>
                </div>
            </div>
        );
    }
}

export default ColumnOne;