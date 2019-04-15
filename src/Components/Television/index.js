import React, { Component } from 'react';
import Programa from './Programa'
import './styles_television.css'

class Television extends Component{
    
    render(){
        return(
            <div className="container-fluid container_margin_television">
                <Programa/>
                <Programa/>
                <Programa/>
                <Programa/>
                <Programa/>
            </div>
        );
    }
}

export default Television;