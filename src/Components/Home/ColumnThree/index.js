import React, { Component } from 'react';
import ElementosColumnaTres from './elementsCT';
import ElementosOpinion from './elementsOpinion'
import './style_ct.css'


class ColumnThree extends Component{
    /*
    
     
    */
   render(){
    return(
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4" >
            <div className="row rowSpace"></div>
            <div className="row">
                <div className="titleSection">
                    <div className="alignDiv">
                        <div className="squareTitleSee">
                            <p className="titleFeed">LO M&Aacute;S VISTO</p>
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
                <ElementosColumnaTres />
            </div>
            <br/>
            <div className="row">
                <div className="titleSection">
                    <div className="alignDiv">
                        <div className="squareTitleSee">
                            <p className="titleOpinions">OPINIONES</p>
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
                <ElementosOpinion />
            </div>
            <br/>
        </div>
    );
}
}

export default ColumnThree;