import React from 'react';
import './showdata.css'
class ShowData extends React.Component{
    render(){
        return(
            <>
            <div id = "dis">Form Data</div>
            <div className='submission'>
                <h1>Name ::</h1>
                <h2>{this.props.sub.name}</h2>
                <h1>Address ::</h1>
                <h2>{this.props.sub.address}</h2>
                <h1>Email ::</h1>
                <h2>{this.props.sub.email}</h2>
                <h1>Gender ::</h1>
                <h2>{this.props.sub.gender}</h2>
                <h1>Why do you want to get married ::</h1>
                <h2>{this.props.sub.about1}</h2>
                <h1>What do you want from life ::</h1>
                <h2>{this.props.sub.about2}</h2>
            </div>
            </>
        );
    }
}

export default ShowData;