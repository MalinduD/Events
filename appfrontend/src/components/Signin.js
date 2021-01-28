import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import SignupNav from './signupNav'
import TourInfo from './TourInfo'

export class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
     
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        
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

         <Router>
             <Switch> 
             {/* <Route exact path="/Signin/TourInfo/:token/:fname" component={TourInfo}></Route>   */}
          <div>
            <SignupNav></SignupNav>
            <div className="card bg-light" style={{width:"600px", marginLeft:"400px", marginTop:"100px"}}>

                <form className="form-signin"action="/Signin/SigninUsers" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal text-center" >Sign In</h1>
                    
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
                    <button className="btn btn-md btn-primary " type="submit" style={{width:"100px"}}>Sign in</button>
                    
                    </div>
                    

                </form>

            </div>
            </div>
            
  
           
        </Switch>
        </Router>
        )
    }
}

export default Signin