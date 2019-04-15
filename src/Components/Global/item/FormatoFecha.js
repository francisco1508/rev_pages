import React, { Component } from 'react';
import IconoCalendario from '../images/icon_calendar.png'
import IconoUsuario from '../images/icon_user.png'

class FormatoFecha extends Component{
   
    render(){
        const { 
            title_publish,
            name_publish, 
            date_publish } = this.props;
        return(
            <div className="positionFecha">
                <div className="centradoHorizontal disminucionLinea">{ title_publish }</div>
                <div className="centradoHorizontal">
                    <div className="itemElementAlineacion separacionDerecha">
                        <div className="itemElementAlineacion">
                            <img src={ IconoCalendario } alt=""/>
                        </div>
                        <div className="itemElementAlineacion itemElementFormato">{ name_publish }</div>
                    </div>
                    <div className="itemElementAlineacion">
                        <div className="itemElementAlineacion">
                            <img src={ IconoUsuario } alt=""/>
                        </div>
                        <div className="itemElementAlineacion itemElementFormato">{ date_publish }</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormatoFecha;