import React, { Component } from "react";
import "../Landing/Landing.css";
import {Link} from "react-router-dom";

class Landing extends Component {

    render() {
        return (
            <div className="background container">
                <div className="nav">
                    <Link path="exact" to="/">Home</Link>
                    <Link path="exact" to="/Projects">Projects</Link>
                    <Link path="exact" to="/Contact">Contact</Link>
                </div>
                <div className="welcome">
                    <h1 className="name">James Etchells</h1>
                    <p>Full-Stack Web Developer</p>
                </div>
                <div className="about">
                    <div className="technologies">
                        <ul>
                            <h1>
                                Browser Based Technologies
                            </h1>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                            <li>Firebase</li>
                            <li>Cookies, Local Storage</li>
                            <li>React.js</li>
                        </ul>
                        <ul>
                            <h1>
                                Deployment
                            </h1>
                            <li>Heroku</li>
                            <li>Git</li>
                        </ul>
                        <ul>
                            <h1>
                                Databases
                            </h1>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul>
                            <h1>
                                Node.Js Server Side Deployment
                            </h1>
                            <li>Express</li>
                            <li>Security and Session Storage</li>
                            <li>User Authentication</li>
                            <li>MERN Stack</li>
                        </ul>

                    </div>
                    <div className="footer">
                        <p>&copy; James Etchells</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;