import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import './MyTopNav.css';

export default class MyTopNav extends Component {
    render(){
    return(
        <div className="color-nav">
        <Navbar expand="lg" className="color-nav" >
            <Nav.Link className="black" href="/home" >Home</Nav.Link>
            <Nav.Link className="black" href="/location" >Location</Nav.Link>
            <Nav.Link className="black" href="/rsvp" >RSVP</Nav.Link>
            <Nav.Link className="black" href="/request">Request a Song</Nav.Link>
         </Navbar>  
        </div>
    );

    }
}