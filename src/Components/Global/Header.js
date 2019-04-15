import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './css/Header.css'
import Logo from './images/logo.png'

class Header extends Component{
    static propTypes={
        items: PropTypes.array.isRequired,
    }
    selectMenu=(ev, class_name)=>{
        ev.preventDefault();
        console.log(class_name);
        var tablinks = document.getElementsByClassName("menu_select");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active_link", "");
        }
        document.getElementById(class_name).style.display = "inline-block";
        ev.currentTarget.className += " active_link";
   }

    render(){
        // className="col-3 col-sm- col-md- col-lg- col-xl-"

        const { title, items } = this.props;
        return(
            <div className="Header">
                <div className="">
                        <img className="logoClass " src={ Logo } alt="imagen"/>    
                </div>
                <hr/>
                <div className="">
                    <div className="">
                        <ul className="Menu">
                        {items && items.map((item, key)=> 
                            <li 
                                key={key}
                                id={item.title}
                                className="menu_select"
                                onClick={ (e)=>{this.selectMenu(e,item.title)}}
                            
                            >
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Header;