import React, {Component} from 'react';
import { Col, Row, Container } from "../../components/Grid/index";
import Home from "../../components/Home/home";
import About from "../../components/About/about";
import Skill from "../../components/Skill-Set/skills"
import Porfolio from "../../components/Portfolio/port"
import "./landing.css"
import Portfolio from '../../components/Portfolio/port';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Landing extends Component {

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeOutQuint'
        })
      }
      
    render(){
    return(
       <Container fluid>
           <Row>
               <Home></Home>
               <About></About>
               <Skill></Skill>
               <Portfolio></Portfolio>
           </Row>
       </Container> 
    );
}
}

export default Landing