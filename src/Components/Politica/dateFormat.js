import React, { Component } from 'react';
import IconoCalendario from '../Global/images/icon_calendar.png'
import IconoUsuario from '../Global/images/icon_user.png'

class DateFormat extends Component{
    render(){
        const { name_publish, date_publish } = this.props;
        return(
            <div>
                <div className="alignDivSpace">
                   <div className="alignDivTwo divCentradoDate">
                        <img src={ IconoCalendario } alt=""/>
                   </div> 
                   <div className="alignDivTwo divCentradoDate">{ name_publish }</div>
                </div>
                <div className="alignDiv">
                    <div className="alignDivTwo divCentradoDate">
                        <img src={ IconoUsuario } alt=""/>
                    </div> 
                   <div className="alignDivTwo divCentradoDate">{ date_publish }</div>
                </div>
            </div>
        );
    }
}

export default DateFormat;