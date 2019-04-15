import React, { Component } from 'react';
import './styles.css'
import Elements from './elements'

class ColumnTwo extends Component{

    render(){
        return(
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" >
                <div className="row rowSpaceMiddle rowSpaceSmall">
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
                        name_publish="Fulanito Sutanito"
                        date_publish="15 Febrero 2019"
                        title_publish="Titulo de Prueba"
                        description="Creo que lo unico que quiero ver es que onda con el desarrollo de las cosas hechas bien."
                        type_publish="Reportaje"
                    />
                </div>
                
            </div>
        );
    }
}

export default ColumnTwo;