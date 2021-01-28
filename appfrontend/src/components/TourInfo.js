import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import SignupNav from './signupNav'
import axios from 'axios'

export class TourInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token:"",
            fName:"",
            email:"",
            reviewer:"",
            country:"",
            location:"",
            when:"",
            days:"",
            descrip:"",
            user:[],
            afName:"",
            alName:"",
            mobile:"",
            email:"",
            password:"",
            aDeleteEmail: ""
        };
        
        
        this.setRev= this.setRev.bind(this);
        this.setEmail= this.setEmail.bind(this);
        this.setCountry = this.setCountry.bind(this);
        this.setLoc = this.setLoc.bind(this);
        this.setWhen = this.setWhen.bind(this);
        this.setDays = this.setDays.bind(this);
        this.setDes = this.setDes.bind(this);
        this.handleViewInfos = this.handleViewInfos.bind(this);
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setDeleteEmail = this.setDeleteEmail.bind(this);
        this.deleteAcc = this.deleteAcc.bind(this);
    }

    setRev(event){
        this.setState({
            reviewer: event.target.value
        });
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        });
    }
    setCountry(event){
        this.setState({
            country: event.target.value
        });
    }
    setLoc(event){
        this.setState({
            location: event.target.value
        });
    }
    setWhen(event){
        this.setState({
            when: event.target.value
        });
    }
    setDays(event){
        this.setState({
            days: event.target.value
        });
    }
    setDes(event){
        this.setState({
            descrip: event.target.value
        });
    }


    componentDidMount() {
        let {fname} = this.props.match.params;
        let {token} = this.props.match.params;
        let {email} = this.props.match.params;
        console.log(token);
        console.log(fname);
        console.log(email);
        this.handleToken(token);
        this.handleFname(fname);
        this.handleEmail(email);
        this.handleViewInfos(email);
    }

    handleToken(token){
        console.log(token);
        this.setState({
            token:token
        })
    }
    handleFname(fname){
        console.log(fname);
        this.setState({
            fName:fname
        })
    }

    handleEmail(email){
        console.log(email);
        this.setState({
            email:email
        })
    }

    handleViewInfos(email){
        let infoMail = email;
        axios.get('/TourInfo/AccountInformations/'+infoMail).then((response) => {
            let data = response.data;
            this.setState({
                user: data
            });
            console.log('data has been received');
            console.log(this.state.user);
        })
            .catch(() => {
                alert('Error receiving data');
            });
    }

    setFname(event){
        this.setState({
            afName: event.target.value
        });
    }
    setLname(event){
        this.setState({
            alName: event.target.value
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
    setDeleteEmail(event){
        this.setState({
            aDeleteEmail: event.target.value
        });
    }
    deleteAcc(event){
        let deleteAccEmail = this.state.aDeleteEmail;
        axios.get('/TourInfo/deleteAccount/' + deleteAccEmail);
        this.setState({
            aDeleteEmail:""
        });
    }

    render() {
        return (
        <div>
            <SignupNav token={this.state.token} logName={this.state.fName}></SignupNav>
            <div className="card-deck">
            <div className="card bg-light" style={{width:"600px", marginLeft:"50px", marginTop:"50px"}}>

                <form className="form-signin"action="/TourInfo/addInformations" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal text-center" >My Tour</h1>
                    <input type="hidden" name="hide" value={this.state.token}></input>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Review By</div>
                    </div>
                    <input type="text" id="inputAurthor" name="uAuthor" onChange={this.setRev} defaultValue={this.state.fName} className="form-control" placeholder="Reviewer" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                    </div>
                    <input type="email" id="inputEmail" name="uEmail" onChange={this.setEmail} defaultValue={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Country</div>
                    </div>
                    <input type="text" id="inputCountry" name="uCountry" onChange={this.setCountry} value={this.state.country} className="form-control" placeholder="Country" required></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Location</div>
                    </div>
                    <input type="text" id="inputLocation" name="uLocation" onChange={this.setLoc} value={this.state.location} className="form-control" placeholder="Location" required></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">When</div>
                    </div>
                    <input type="date" id="inputWhen" name="uWhen" onChange={this.setWhen} value={this.state.when} className="form-control" placeholder="When" required></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Days</div>
                    </div>
                    <input type="number" id="inputDays" name="uDays" onChange={this.setDays} value={this.state.days} className="form-control" placeholder="Days" required></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Description(Summary)</div>
                    </div>
                    <textarea className="form-control" rows="5" id="comment" name="uDescription" onChange={this.setDes} value={this.state.descrip}></textarea>
                    </div>
                   
                    <div className="text-center mb-3">
                    <button className="btn btn-md btn-primary " type="submit" style={{width:"100px"}}>ADD</button>
                    
                    </div>
                    

                </form>

            </div>
            <div class="card bg-light mt-5 mr-5">
                <div class="card-body text-center">
                <form className="form-signin" action="/TourInfo/updateAccount" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Account</h1>
                    <input type="hidden" name="uphide" value={this.state.token}></input>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">First Name</div>
                    </div>
                    <input type="text" id="inputFname" name="upFname" onChange={this.setFname} defaultValue={this.state.user.fName} className="form-control" placeholder="First name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Last Name</div>
                    </div>
                    <input type="text" id="inputLname" name="upLname" onChange={this.setLname} defaultValue={this.state.user.lName} className="form-control" placeholder="Last name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Mobile</div>
                    </div>
                    <input type="text" id="inputMob" name="upMobile" onChange={this.setMobile} defaultValue={this.state.user.mobile} className="form-control" placeholder="+94xxxxxxxxx" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                    </div>
                    <input type="email" id="inputEmail" name="upEmail" onChange={this.setEmail} defaultValue={this.state.user.email}  className="form-control" placeholder="Email address" required autoFocus readOnly></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Password</div>
                    </div>
                    <input type="password" id="inputPassword" name="upPassword" onChange={this.setPassword} defaultValue={this.state.user.password}  className="form-control" placeholder="Password" required></input>
                    </div>
                   
                    <div className="text-center">
                    <button className="btn btn-md btn-primary " type="submit" style={{width:"110px"}}>Update</button>
                
                    </div>
                </form>
                <label htmlFor="sel1" style={{ marginLeft:"50px"}}>Input your email here to delete the account :</label>
                     <input type="email" id="inputEmail" name="dCusEmail" onChange={this.setDeleteEmail} value={this.state.aDeleteEmail} className="form-control" placeholder="Email address" required autoFocus></input>
                     <div className="text-center">
                     <a class="nav-link" href="/"><button className="btn btn-md btn-danger mt-3" onClick={this.deleteAcc} type="submit" style={{width:"180px"}}>Delete Account</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
            
  
           

        )
    }
}

export default TourInfo