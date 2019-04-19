import React, { Component } from 'react';
import Reportaje from './Reportaje'
import './styles_reportajes.css'


class Reportajes extends Component{
    
    render(){
        return(
            <div className="container_margin_reportaje">
                <Reportaje/>
                <Reportaje/>
                <Reportaje/>
                <Reportaje/>
                <Reportaje/>
            </div>
        );
    }
}

export default Reportajes;