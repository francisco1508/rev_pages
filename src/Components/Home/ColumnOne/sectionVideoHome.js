import React, { Component } from 'react';

class VideoHome extends Component{
    state={
        online: true,
    }
    render(){
        return(
                <div className="container-video">
                    <div className="header-video">
                        <iframe
                            title="Video"
                            className="iframe-class"
                            src="https://www.youtube.com/embed/Me2aXBodqnA" 
                            frameborder="0" allow="autoplay; encrypted-media" 
                            allowfullscreen></iframe>
                        <div 
                            className="iframe-tag"
                            style={this.state.online?{display:"inline"}:{display:"none"}}
                        >En Vivo</div>
                    </div>
                    <div className="footer-video">
                        <div className="footer-video-title">
                            <strong>Titulo del Video</strong>
                        </div>
                        <div className="footer-video-description">
                            <div className="upload-by-home">Subido por Francisco </div>
                            <div 
                                className="online-by-home" 
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