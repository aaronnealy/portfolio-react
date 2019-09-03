import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./contact.css";


class Contact extends Component {
    render(){
        return(
            <div className="text-light Contact">

            <h4> Contact Info </h4>
          <ul>
              <li> Aaron Nealy </li>
              <li> Chicago, IL</li>
              <li> 773-663-6627 </li>
              <li> alorenzonealy@gmail.com</li>
              
          </ul>
          </div>
        )
    }
}

export default Contact