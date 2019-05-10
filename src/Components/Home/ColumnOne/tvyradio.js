import React, { Component } from 'react';

class RadioTv extends Component{
    render(){
        return(
            <div className="elementos-centrados">
                <button type="button" className="btn btn-info buttonTV">TV</button>
                <button type="button" className="btn btn-info buttonRadio">Radio</button>
            </div>
            // <div className="row">
            //     <div className="space_column_one">
            //     <button type="button" className="btn btn-info buttonTV">TV</button>
            //     <button type="button" className="btn btn-info buttonRadio">Radio</button>
            //     </div>
            // </div>
        );
    }
}

export default RadioTv;