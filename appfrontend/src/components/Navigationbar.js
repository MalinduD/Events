import React, { Component } from 'react';
import Signup from "./Signup";
import Signin from './Signin';
import TourInfo from './TourInfo'
import Tours from './Tours'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Navigationbar extends Component {
  render(){
  return (

    <Router>
        <Switch>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Signin" component={Signin}/>
        <Route exact path="/Tours" component={Tours}/>
        <Route exact path="/Signin/TourInfo/:token/:fname/:email" component={TourInfo}></Route> 
            <div className="Navigationbar">
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
                        <li class="nav-item" style={{marginLeft:"900px"}}>
                        <a class="nav-link" href="/Signup">Signup</a>
                        </li>
                        <li class="nav-item" >
                        <a class="nav-link" href="/Signin">Signin</a>
                        </li>
                    </ul>
                </nav>
            </div>
    </Switch>
    </Router>
  );
  }
}

export default Navigationbar;