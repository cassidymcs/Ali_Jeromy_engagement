import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default class Home extends Component {
    render(){
    return(
         
         <div>
           <h1>  HELLO FROM HOME </h1>
           <Link to="/about">
               <Button> About </Button>
           </Link>
         </div>
    )

    }
}