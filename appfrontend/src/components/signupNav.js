import React, { Component } from 'react';
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class signupNav extends Component {
  render(){

    const{token, logName} = this.props;
        console.log(token);
        console.log(logName);

        const signupLink = (
            <ul className="navbar-nav" style={{marginLeft:"900px"}}>
                <li class="nav-item">
                <a class="nav-link" href="/Signup">Signup</a>
                </li>
                <li class="nav-item" >
                 <a class="nav-link" href="/Signin">Signin</a>
                </li>
            </ul>
        )
        const signoutLink = (
            <ul className="navbar-nav"  style={{marginLeft:"900px"}}>
                <li className="nav-item">
                    <a href=""  className="nav-link">
                        {logName}
                    </a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link">Logout</a>
                </li>
               
            </ul>
        )

  return (

            <div className="signupNav">
                <nav class="navbar navbar-expand-sm bg-danger navbar-light">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                        </li>
                
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#">MyTour</a>
                        </li>
                        <li class="nav-item active">
                        <a class="nav-link" href="/Tours">Tours</a>
                        </li>
                    </ul>

                    {token ? signoutLink : signupLink}

                </nav>
            </div>
   
  );
  }
}

export default signupNav;