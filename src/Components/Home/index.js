import React, { Component } from 'react';
import './home.css'
import ColumnOne from './ColumnOne'
import ColumnTwo from './ColumnTwo'
import ColumnThree from './ColumnThree'

class Home extends Component{
    /* */
    render(){
        return(
            <div className="container-fluid container_margin">
                <div className="row">
                    <ColumnOne />
                    <ColumnTwo />
                    <ColumnThree />
                </div>
            </div>
        );
    }
}

export default Home;