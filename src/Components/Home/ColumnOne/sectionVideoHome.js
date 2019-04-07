import React, { Component } from 'react';

class VideoHome extends Component{
    state={
        online: true,
    }
    render(){
        return(
                <div className="containerVideo">
                    <div className="headerVideo">
                        <iframe
                            title="Video"
                            className="iframeClass"
                            src="https://www.youtube.com/embed/Me2aXBodqnA" 
                            frameborder="0" allow="autoplay; encrypted-media" 
                            allowfullscreen></iframe>
                        <div 
                            className="iframeTag"
                            style={this.state.online?{display:"inline"}:{display:"none"}}
                        >En Vivo</div>
                   
                    </div>
                    <div className="footerVideo">
                        <div className="footerVideoTitle">
                            <strong>Titulo del Video</strong>
                        </div>
                        <div className="footerVideoDescription">
                            <div className="uploadByHome">Subido por Francisco </div>
                            <div 
                                className="onlineByHome" 
                                style={this.state.online?{display:"inline"}:{display:"none"}}
                            > 
                                - EN VIVO ahora
                            </div>
                        </div>
                    </div>
                </div>
               
            
        );
    }
}

export default VideoHome;