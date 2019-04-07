import React, { Component } from 'react';
import IconUser from '../../Global/images/icon_user.png';
import IconCalendar from '../../Global/images/icon_calendar.png';
import IconMuestra from '../../Global/images/img_card_feed.png'

class Elements extends Component{

    render(){
        const { autor,
                date_publish,
                title, 
                description,
                type_publish } = this.props;
        return(
            <div className="elementCSS">
                <div className="imageElementsCss">
                    <img className="mx-auto d-block imageElementsCss" 
                        src={ IconMuestra } 
                        alt=""
                    />
                    <div className="cajaTextoImagen">{ type_publish }</div>
                </div>
                <div className="text-center boxMiddleElements">
                    <div class="d-flex justify-content-center">
                        <div class="p-2 order-1 ">
                            <img className="" src={ IconUser } alt=""/>
                        </div>
                        <div class="p-2 order-2" >
                            <p className="pElementsUser">{ autor }</p>
                        </div>
                        <div class="p-2 order-3"></div>
                        <div class="p-2 order-4">
                            <img className="" src={ IconCalendar } alt=""/>
                        </div>
                        <div class="p-2 order-5">
                            <p className="pElementsUser">{ date_publish }</p>
                        </div>
                    </div>
                </div>
                <div className="boxInfoElements">
                    <h5 className="titleElements">{ title }</h5>
                    <p className="paragraphElements">
                        { description }
                    </p>
                    <a className="pElementsUser" href="https://www.facebook.com/">Ver mas</a>
                </div>
            </div>
        );
    }
}

export default Elements;