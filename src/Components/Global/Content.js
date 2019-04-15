import React, { Component } from 'react';
import './css/Content.css'
import PropTypes from 'prop-types'
import Carrusel from './Carrusel'

class Content extends Component{
    static propTypes = {
        body: PropTypes.object.isRequired,
    }
    render(){
        const { body } = this.props;
        return(
            <div className="container-fluid contentClass">
                <div className="container-fluid">
                    <Carrusel />
                    { body }
                </div>
            </div>
            
        );
    }
}

export default Content;