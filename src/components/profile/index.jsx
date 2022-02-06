import React, { Component } from 'react';
import Bio from './bio';
 import Skills from './skills';
import Social from './social';



class Profile extends Component {
  me ={
    name: "Tanvir Reza",
    title : "Programmer , React Developer and Cyber Security Expart !!",
    skillA : "Html",
    skillB : "Java",
    skillC : "Javascript"
  }
  render() {
    return <div className='wrapper'>
            <Bio pro={this.me}/>
            <Skills pro={this.me}/>
            <Social pro={this.me}/>
          </div>;
  }
}


export default Profile;