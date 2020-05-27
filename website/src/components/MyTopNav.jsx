import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

export default class MyTopNav extends Component {
    render(){
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link >Location</Nav.Link>
            <Nav.Link >RSVP</Nav.Link>
            <Nav.Link >Request a Song</Nav.Link>
        </Navbar>
    )

    }
}