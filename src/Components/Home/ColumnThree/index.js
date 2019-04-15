import React, { Component } from 'react';
import ElementosColumnaTres from './elementsCT';
import ElementosOpinion from './elementsOpinion'
import Opinion from '../../Global/opinion/Opinion';
import './style_ct.css'


class ColumnThree extends Component{
    /*
    
     
    */
   render(){
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" >
            <div className="row rowSpace rowSpaceSmall"></div>
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
            <div className="row elementCSS">
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
            <div>
                <Opinion 
                    name_opinion="Francisco Juarez "
                    text_opinion="Pienso luego existo... o eso creo :/"
                />
            </div>
            <br/>
        </div>
    );
}
}

export default ColumnThree;