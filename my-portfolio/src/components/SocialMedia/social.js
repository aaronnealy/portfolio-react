import React, {Component} from 'react';
import "./social.css";
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

class Social extends Component {
   render() {
    return(
        <div className="row d-flex justify-content-center social">

            <div className="col-3 text-right">
            <h3><a href={"https://github.com/aaronnealy"} target={"_blank"}><FaGithub /></a></h3>
            </div>

            <div className="col-2 text-center">
            <h3><a href={"https://www.linkedin.com/in/aaron-nealy-769198129"} target={"_blank"}><FaLinkedinIn /></a></h3>
            </div>

            <div className="col-3 text-left">
            <h3><a href={"https://www.instagram.com/alorenzo94/"} target={"_blank"}><FaInstagram /></a></h3>
            </div>
        </div>
    )
   }
    
}

export default Social