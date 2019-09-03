import React from 'react';
import "./nav.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Nav extends React.Component {
    constructor() {
        super();
        this.state ={
            scrolled: false,
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY < 100;
            // console.log(window.scrollY)
            if (isTop !== true) {
                this.setState({ scrolled: true});
            } else {
                this.setState({ scrolled: false});
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');

    }

    render(){
    return (
        <nav className={this.state.scrolled ? 'navv scrolled' : 'navv'}>

            <div className="navLinks">
                <ul>
                    <li><Link activeClass="active" className="homeScrl" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" className="aboutScrl" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                    <li><Link activeClass="active" className="portScrl" to="port" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                </ul>
            </div>
        </nav>
    );
}
}

export default Nav
