import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default class Home extends Component {
    render(){
    return(

         <div className="body">
             <div>
               <img src={require('../assets/BeachPic.jpg')} className="img"  alt="Ali/JeromyPhoto"/>
               <h2 className="img-quote">We're Getting Married!</h2>
            </div>
         <div>
        </div>
         </div>
    )

    }
}