import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'


// import AddCourse from './components/AddCourse'
class App extends Component {
  render(){
  return (
    <div className="App">
     <div className="jumbotron">
      <h1>MyTour</h1>      
      <p>Review your tour in here, then others can plan their tours successfully.</p>
    </div>
     <Navigationbar></Navigationbar>
     <div class="card-deck">
    <div class="card bg-primary mt-5 ml-3 mr-3 ">
      <div class="card-body text-center">
        <p class="card-text">ANURADHAPURA</p>
        <p class="card-text">Anuradhapura. Anuradhapura, city, north-central Sri Lanka. It is situated along the Aruvi Aru River. The old section of Anuradhapura, now preserved as an archaeological park and designated a UNESCO World Heritage site in 1982, is the best known of Sri Lanka's ancient ruined cities.</p>
      </div>
    </div>
    <div class="card bg-warning mt-5 ml-3 mr-3 ">
      <div class="card-body text-center">
        <p class="card-text">POLONNARUWA</p>
        <p class="card-text">Polonnaruwa is the second largest city in North Central Province, but it is known as one of the cleanest and more beautiful cities in the country. The green environment, amazing ancient constructions, Parakrama Samudra (a huge lake built in 1200), and attractive tourist hotels and hospitable people, attract tourists.</p>
      </div>
    </div>
    <div class="card bg-success mt-5 ml-3 mr-3 ">
      <div class="card-body text-center">
        <p class="card-text">YAPAHUWA</p>
        <p class="card-text">Yapahuwa  was one of the ephemeral capitals of medieval Sri Lanka. The citadel of Yapahuwa lying midway between Kurunagala and Anuradhapura was built around a huge granite rock rising abruptly almost a hundred meters above the surrounding lowlands.</p>
      </div>
    </div>
    <div class="card bg-dark mt-5 ml-3 mr-3 ">
      <div class="card-body text-center">
        <p class="card-text text-danger">DABADENIYA</p>
        <p class="card-text text-danger">Dambadeniya. Dambadeniya is a ruined ancient city situated in the North Western Province (Wayamba), Sri Lanka on the Kurunegala - Negombo main road. It served as the capital of Sri Lanka in the mid 13th century. Much of Dambadeniya still lies buried on a huge fortified rock.</p>
      </div>
    </div>  
  </div>
     <Footer></Footer>
    </div>
  );
  }
}

export default App;
