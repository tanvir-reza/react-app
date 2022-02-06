import React, {Component} from "react";

class Bio extends Component{
    render(){
        return (
        <div className="bio">
        <h1 className='name'>{this.props.pro.name}</h1>  
        <p className='des'>{this.props.pro.title}</p>
        </div>
        )
        ;
    }
}
export default Bio;