import React, { Component } from 'react';
import './styles.css'
import Elements from './elements'

class ColumnTwo extends Component{

    render(){
        return(
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4" >
                <div className="row rowSpaceMiddle">
                    <div className="titleSection">
                        <div className="alignDiv">
                            <div className="squareTitle">
                                <p className="titleFeed">FEED</p>
                            </div>
                        </div>
                        <div className="alignDiv">
                            <div className="squareLine">
                                <hr className="lineFeed"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <Elements 
                        autor="Fulanito Sutanito"
                        date_publish="15 Febrero 2019"
                        title="Titulo de Prueba"
                        description="Creo que lo unico que quiero ver es que onda con el desarrollo de las cosas hechas bien."
                        type_publish="Noticia"
                    />
                </div>
                
            </div>
        );
    }
}

export default ColumnTwo;