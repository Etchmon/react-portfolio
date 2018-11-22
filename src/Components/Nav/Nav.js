import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../Nav/Nav.css";


class Nav extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <Link path="exact" to="/">Home</Link>
                    <Link path="exact" to="/Projects">Projects</Link>
                    <Link path="exact" to="/Contact">Contact</Link>
                </div>
            </div>
        )
    }
};

export default Nav;