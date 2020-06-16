import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../Landing/Landing.css";
import Nav from "../Nav";

class Landing extends Component {

    render() {
        return (
            <div className="background container">
                <div className="welcome">
                    <h1 className="name">James Etchells</h1>
                    <h2>Full-Stack Web Developer</h2>
                    <p className="bio">Hey, I'm a Full-Stack Developer, looking to be a valuable member of a team. I have a wide range of tech knowledge, and building computers has been a passion of mine since I was a kid. I come from a background of hard labour jobs such as a cooking in some of the best kitchens in San Diego. One of my biggest strengths is adapting, becoming whatever the team needs to be progress. I find a lot of motivation helping others, and believe together people can achieve exceptional things. I am always continuing my education in all things tech via online courses, and my goal is to become OSCP certified and practice pen testing. I look forwarding to hearing about new projects, and if I can be apart of them.Thank you for reading, be well and stay safe. </p>
                    <div className="links">
                        <Link path="exact" to="/Github">Github</Link>
                        <Link path="exact" to="/LinkedIn">LinkedIn</Link>
                        <a href="www.gmail.com">UpWork</a>
                    </div>
                    <p>Etch.rush@gmail.com</p>
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