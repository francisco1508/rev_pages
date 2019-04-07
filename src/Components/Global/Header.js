import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './css/Header.css'
import Logo from './images/logo.png'

class Header extends Component{
    static propTypes={
        items: PropTypes.array.isRequired,
    }

    render(){
        // className="col-3 col-sm- col-md- col-lg- col-xl-"
        const { title, items } = this.props;
        return(
            <div className="Header">
                <div className="row">
                    <div className="col-sm-2 col-md-3 col-lg-3"></div>
                        <div className="col-sm-4 col-md-6 col-lg-6">
                        <img className="logoClass" src={ Logo } alt="imagen"/>
                        </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 searchbar">   
                    </div>
                </div>          
                <hr/>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="Menu">
                            {items && items.map((item, key)=> 
                            <li key={key}>
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