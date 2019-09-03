import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./skills.css";

class Skill extends Component {
    render() {
        return (
            <Container fluid>
                <div className="row">
                 
                    <div className="col-12">
                        <h3 className="d-flex justify-content-center skillSet"> Skill-Set </h3>
                    </div>

                </div>

                <div className="row cusRow">


                    <div className="col-9 text-center">
                       
                    <div class="progress">
                    <div class="progress-bar w-100 html" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">HTML5/CSS</div>
                    </div>

                    <br></br>

                    <div class="progress">
                    <div class="progress-bar react" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">React.js</div>
                    </div>

                    <br></br>

                    <div class="progress">
                    <div class="progress-bar java" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">Java Script</div>
                    </div>

                    <br></br>

                    <div class="progress">
                    <div class="progress-bar mongo" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">MongoDB/MySQL</div>
                    </div>


                    </div>
   
                </div>
            </Container>
        )
    }
}

export default Skill