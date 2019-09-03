import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./about.css";
import Logo from "../Logo/logo";
import Contact from "../Contact/contact"
import { Element} from 'react-scroll'

class About extends Component {
  render() {
    return (
      <Container fluid>
        <Element name="about" className="abtBody">
          <Row>
            <div className="col-4 col1">
              <Logo />
            </div>

            <div className="col-6 col2">

              <h4 className="text-light">About Me</h4>

              <p className="text-light">
                Former ABA therapist come to be a full-stack developer with a
                passion for the front-end and a love-hate relationship with the
                back-end. Known as someone who enjoys approaching challenges
                head on and collaborating with others to build useful web
                applications.
              </p>
              <Contact />
            </div>

            <div className="col-2 col3" />
          </Row>
        </Element>
      </Container>
    );
  }
}

export default About;
