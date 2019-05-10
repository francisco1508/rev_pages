import React, { Component } from 'react';
import './home.css'
import ColumnOne from './ColumnOne'
import ColumnTwo from './ColumnTwo'
import ColumnThree from './ColumnThree'

class Home extends Component{
    render(){
        return(
            <div className="container_margin">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 home-borde-columna">
                        <ColumnOne />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 home-borde-columna">
                        <ColumnTwo />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 home-borde-columna">
                        <ColumnThree />
                    </div>
                   
                    {/* 
                     */}
                </div>
            </div>
        );
    }
}

export default Home;