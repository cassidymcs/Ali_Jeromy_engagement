import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import './MyTopNav.css';

export default class MyTopNav extends Component {
    render(){
    return(
        <Navbar bg="light" expand="lg" className="color-nav" >
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/location" >Location</Nav.Link>
            <Nav.Link href="/rsvp">RSVP</Nav.Link>
            <Nav.Link href="/request">Request a Song</Nav.Link>
        </Navbar>
    );

    }
}