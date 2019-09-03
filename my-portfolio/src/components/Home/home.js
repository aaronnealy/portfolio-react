import React, {Component} from 'react';
import { Col, Row, Container } from "../Grid";
import Social from "../SocialMedia/social";
import "./home.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Home extends Component {
    render() {
        return(
    
    <Container fluid>
        <Row  class="row align-items-center">
        
            <Element name="home" className='homeContainer'>
                <h1> Aaron Lorenzo Nealy </h1>
                    <Col size="m-12"> <p className="text-secondary">Front-End Web Developer utilizing a background in psychology to build a more intuitive user-experience</p></Col>
                    <Social></Social>
            </Element>

        </Row>
    </Container>
        )
    }
}

export default Home