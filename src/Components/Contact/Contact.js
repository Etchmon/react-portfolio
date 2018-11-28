import React, { Component } from "react";
import "../Contact/Contact.css";
import Nav from "../Nav";

class Contact extends Component {
    render() {
        return (
            <div className="contactBody">
                <Nav></Nav>
                <form id="contact-form" method="POST">
                    <h1>Shoot me an Email!</h1>
                    <h2>Name</h2>
                    <input type="text"></input>
                    <h2>Email</h2>
                    <input type="text"></input>
                    <h2>Message</h2>
                    <textarea rows="5" width="200px"></textarea>
                    <div><button id="submit" type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
};

export default Contact;