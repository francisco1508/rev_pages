import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Footer.css'

class Footer extends Component{
    static propTypes = {
        copyright: PropTypes.string,
    }

    /* <div className="footer-copyright text-center py-3">
                    <p dangerouslySetInnerHTML={{__html: copyright}}/>
                </div> */

    render(){
        const { copyright = '&copy; React 2019' } = this.props;
        return(
            <div className="page-footer font-small special-color-dark footer-style">
                <div className="row footer-center padding-dropped margin-dropped">
                     <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            ENCUENTRANOS EN
                            </div>
                        </div>
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            Lorem ipsum #45, consectetur adipiscing elit, ipsum<br>
                            </br>Ciudad de México
                            </div>
                        </div>
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <p>
                                (55)5555-5555<br/>
                                (55)5555-5555
                            </p>
                            </div>
                        </div>
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                info@grupoluan.com
                            </div>
                        </div>
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                SIGUENOS
                            </div>
                        </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                PONTE EN CONTACTO CON NOSOTROS
                            </div>
                        </div>
                        <div className="row footer-space-element">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <form>
                               <input type="text" placeholder="Nombre" className="footer-input">
                               </input>
                               <input type="email" placeholder="Correo Electronico" className="footer-input">
                               </input>
                               <textarea type="textarea" placeholder="Mensaje" className="footer-input-textarea">
                               </textarea>
                               <button type="submit" className="footer-button">ENVIAR</button>
                            </form>
                               
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            
        );
    }
}

export default Footer;