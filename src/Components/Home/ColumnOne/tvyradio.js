import React, { Component } from 'react';

class RadioTv extends Component{
    render(){
        return(
            <div className="row">
                <button type="button" className="btn btn-info buttonTV">TV</button>
                <button type="button" className="btn btn-info buttonRadio">Radio</button>
            </div>
        );
    }
}

export default RadioTv;