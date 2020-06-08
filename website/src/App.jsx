import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MyTopNav from './components/MyTopNav';
import Home from './components/Home.jsx';
import Location from './components/Location.jsx';
import Rsvp from './components/Rsvp.jsx';

function App() {
  return (
   <Router>
      <div>
         < MyTopNav/>
         <Switch>
         <Route exact path="/home" component={Home} />
         <Route  path="/rsvp" component={Rsvp} />
         <Route  path="/location" component={Location} />
      </Switch>
      </div>
  </Router>
  );
}
 
export default App;
