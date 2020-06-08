import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default class Home extends Component {
    render(){
    return(
         <div className="body">
           <img src={require('../assets/BeachPic.jpg')} className="img" alt="Ali/JeromyPhoto"/>
         </div>
    )

    }
}