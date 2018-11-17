import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../Landing/Landing.css";

class Projects extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <Link path="exact" to="/">Home</Link>
                    <Link path="exact" to="/Projects">Projects</Link>
                    <Link path="exact" to="/Contact">Contact</Link>
                </div>
                <h1>Projects</h1>
            </div>
        )
    }

};

export default Projects;