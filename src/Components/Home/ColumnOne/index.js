import React, { Component } from 'react';
import TvYRadio from './tvyradio'
import VideoHome from './sectionVideoHome'

class ColumnOne extends Component{

    render(){
        return(
            <div className="row padding-borders">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-borders">
                            tv y radio
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-borders">
                            <TvYRadio />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-borders">
                            <VideoHome/>
                            <VideoHome/>
                            <VideoHome/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        // <div className="row">
        //     <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" >
        //     sdsdfsdfsdfsdfdssdfsdfsdfsdfsdfsdfsdfsfsfsdfsfsdfsfsdfsdf
                // <div className="row rowSpace"></div>
                //   <div className="row">
                //       <div className="titleSection">
                //           <div className="alignDiv">
                //               <div className="squareTitleSee">
                //                   <p className="titleFeed">TV Y RADIO</p> 
                //               </div>
                //           </div>
                //           <div className="alignDiv">
                //               <div className="squareLine">
                //                   <hr className="lineFeed"/>
                //               </div>
                //           </div>
                //            <TvYRadio />
                //       </div>
                //   </div>
                //   <br/>
                //    <div className="row">
                //        <VideoHome/>
                //    </div>
        //     </div>
        // </div>          
        );
    }
}

export default ColumnOne;