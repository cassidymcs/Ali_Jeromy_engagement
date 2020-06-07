import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

export default class MyTopNav extends Component {
    render(){
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/location" >Location</Nav.Link>
            <Nav.Link href="/rsvp">RSVP</Nav.Link>
            <Nav.Link href="/request">Request a Song</Nav.Link>
        </Navbar>
    );

    }
}