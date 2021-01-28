import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import SignupNav from './signupNav'
import TourInfo from './TourInfo'
import axios from 'axios'

export class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tours : []
        };

       
    }
    componentDidMount() {
        this.handleViewTours();
        this.displayTours(this.state.tours);
    }

    handleViewTours() {
        axios.get('/Tours/viewTours').then((response) => {
            let data = response.data;
            this.setState({
                tours: data
            });
            console.log('data has been received');
            console.log(this.state.tours);
        })
            .catch(() => {
                alert('Error receiving data');
            });
    }
    displayTours = tours => {
        return tours.map(tour => {
            return (
                
             
                
                <tr key={tour._id}>
                    <td className="catTitle">{tour.reviewer}
                    </td>
                    <td className="catTitle">{tour.location}
                    </td>
                    <td className="catTitle">{tour.descrip}
                    </td>
                    <td className="catTitle">{tour.days}
                    </td>
                    <td className="catTitle">{tour.country}
                    </td>
                </tr>
            );
        });
    };

    render() {
        return (

       
          <div>
            <SignupNav></SignupNav>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Reviewer</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Days</th>
                        <th>Country</th>
                    </tr>
                </thead>
                    <tbody>
                    {this.displayTours(this.state.tours)}
                    </tbody>
                </table>
            </div>
            
  
           
    
        )
    }
}

export default Tours