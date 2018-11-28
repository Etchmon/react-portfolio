import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../Projects/Projects.css";
import Nav from "../Nav";

class Projects extends Component {

    render() {
        return (
            <div className="projectBody">
                <Nav></Nav>
                <div className="header"><h1>My Work!</h1></div>
                <div className="wrapper">
                    <div className="projectCard">
                        <h2>Dota Streams</h2>
                        <Link path="exact" to="/G" target="_blank"><div className="dotaStreams"></div></Link>
                        <p>A website that brings you the top 10 live dota games, and allows you to switch between games with ease.</p>
                        <ul>
                            <h2>Technologies Used</h2>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="projectCard2">
                        <h2>Dota Streams</h2>
                        <Link path="exact" to="/G" target="_blank"><div className="dotaStreams"></div></Link>
                        <p>A website that brings you the top 10 live dota games, and allows you to switch between games with ease.</p>
                        <ul>
                            <h2>Technologies Used</h2>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="projectCard3">
                        <h2>Dota Streams</h2>
                        <Link path="exact" to="/G" target="_blank"><div className="dotaStreams"></div></Link>
                        <p>A website that brings you the top 10 live dota games, and allows you to switch between games with ease.</p>
                        <ul>
                            <h2>Technologies Used</h2>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="moreWork"><h1>Find more of my work on <a className="gHub" href="https://www.github.com">GitHub!</a></h1></div>
                <div className="footer">
                    <p>&copy; James Etchells</p>
                </div>
            </div>
        )
    }

};

export default Projects;