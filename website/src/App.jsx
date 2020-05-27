import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyTopNav from './components/MyTopNav';
import Home from './components/Home';
import Location from './components/Location';
import Rsvp from './components/Rsvp';

function App() {
  return (
   <Router>
      <div className="App">
         < MyTopNav/>
         <Route exact path="/" component={Home} />
         <Route  path="/rsvp" component={Rsvp} />
         <Route  path="/location" component={Location} />
      </div>
  </Router>
  );
}
 
export default App;
