import React, { Component } from 'react';
import ImagenOpinion from './ImagenOpinion'


class Opinion extends Component{

    render(){
        /*
        <FormatoDescripcion description_publish={ description_publish } link_publish={ link_publish } />
        */
        const {
            name_opinion,
            text_opinion
        } = this.props;
        return(
            <div className="row classMarginItem">
                <div className="col-lg-3">
                    <ImagenOpinion />
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <p className="text-opinion">
                                    { text_opinion }
                                </p>
                            </div>
                            <div className="row">
                                { name_opinion }
                            </div>
                        </div>
                    
                    </div>
                
                </div>
            </div>
        );
    }
}

export default Opinion;