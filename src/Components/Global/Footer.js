import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Footer.css'

class Footer extends Component{
    static propTypes = {
        copyright: PropTypes.string,
    }

    render(){
        const { copyright = '&copy; React 2019' } = this.props;
        return(
            <div className="page-footer font-small special-color-dark footer-style">
                <div className="footer-copyright text-center py-3">
                    <p dangerouslySetInnerHTML={{__html: copyright}}/>
                </div>
            </div>
            
        );
    }
}

export default Footer;