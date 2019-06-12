import React, { Component } from "react";
import "../Contact/Contact.css";
import Nav from "../Nav";

class Contact extends Component {
    render() {
        return (
            <div className = "contact">
                <div className = "contact-title">
                    <h1 className="contact-title-header">
                        James Etchells
                    </h1>
                    <p>
                        Information to get in touch with me
                    </p>
                </div>
                <div className="contact-info">
                    Email
                    phone
                    linkedIN
                    github
                    upwork
                </div>
            </div>
        )
    }
};

export default Contact;