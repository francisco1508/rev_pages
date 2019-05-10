import React, { Component } from 'react';

class FormatoDescripcion extends Component{
   
    render(){
        const { description_publish, link_publish } = this.props;
        return(
            <div className="classFormatDescription">
                <div className="row sectionArticulo">
                    { description_publish }
                </div>
                <div className="row footerArticulo article-margin-top">
                    <a href={ link_publish }>Ver m&aacute;s</a>
                </div>
            </div>
        );
    }
}

export default FormatoDescripcion;