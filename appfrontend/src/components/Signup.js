import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import SignupNav from './signupNav'
class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:"",
            mobile:"",
            email:"",
            password:""
        };
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
       
    }

    setFname(event){
        this.setState({
            fName: event.target.value
        });
    }
    setLname(event){
        this.setState({
            lName: event.target.value
        });
    }
    setMobile(event){
        this.setState({
            mobile: event.target.value
        });
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        });
    }
    setPassword(event){
        this.setState({
            password: event.target.value
        });
    }
 

    render() {
        return (
            
            <div> 
            <SignupNav></SignupNav>
            <div className="card bg-light mt-5" style={{width:"600px", marginLeft:"400px"}}>
              <form className="form-signin" action="/Signup/addSignupUsers" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Sign Up</h1>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">First Name</div>
                    </div>
                    <input type="text" id="inputFname" name="uFname" onChange={this.setFname} value={this.state.fName} className="form-control" placeholder="First name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Last Name</div>
                    </div>
                    <input type="text" id="inputLname" name="uLname" onChange={this.setLname} value={this.state.lName} className="form-control" placeholder="Last name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Mobile</div>
                    </div>
                    <input type="text" id="inputMob" name="uMobile" onChange={this.setMobile} value={this.state.mobile} className="form-control" placeholder="+94xxxxxxxxx" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                    </div>
                    <input type="email" id="inputEmail" name="uEmail" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Password</div>
                    </div>
                    <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                    </div>
                   
                    <div className="text-center">
                    <button className="btn btn-md btn-primary "  type="submit" style={{width:"110px"}}>Sign Up</button>
                
                    </div>
                </form>
            </div>
            
            </div>
           
        )
    }
}

export default Signup;