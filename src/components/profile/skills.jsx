import React from "react";

export default class Skills extends React.Component{
    render(){
        return(
        <div className="skills">
        <h3 className='hTitle'>Skills : </h3> 
        <ul>
          <li>{this.props.pro.skillA}</li>
          <li>{this.props.pro.skillB}</li>
          <li>{this.props.pro.skillC}</li>
        </ul> 
        </div>
        );
    }
}