import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Col, Row, Container } from "../Grid";
import { Element} from 'react-scroll'
import "./port.css";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.jpg";
import image5 from "../../Images/image5.jpg";
import image6 from "../../Images/image6.jpg";
import image7 from "../../Images/image7.jpg";

class Portfolio extends Component {
    render() {
        return (
            <Container fluid >
                <Element name="port" className="row portContainer">
                 
                    <div className="col-12">
                        <h3 className="d-flex justify-content-center projects"> Projects </h3>
                    </div>

                </Element>

                <div className="row portRow">

                    <div className="col-3">
                        <h4><a href={"https://game-of-clicky.herokuapp.com/"} target={"_blank"}>Game of Clicky</a></h4>

                        <img className="portImg1" alt='' src={image2}/>
                        
                    </div>

                    <div className="col-3 text-center">
                        <h4><a href={"https://github.com/aaronnealy/bamazonManager"} target={"_blank"}>Bamazon</a></h4>

                        <img className="portImg2" alt='' src={image3}/>
                    </div>

                    <div className="col-3 text-right">
                        <h4><a href={"https://github.com/aaronnealy/LIRI"} target={"_blank"}>Liri - Bot</a></h4>

                        <img className="portImg3" alt='' src={image4}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Portfolio