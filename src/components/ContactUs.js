import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h23j6pq', 'template_wns4frh', this.form.current, 'jJMOoTjV76T-J7V-P')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank you for contacting us!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                console.log(error.text);
                toast.error('Failed to send email!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    render() {
        return (
            <div>
                <section className="contact" id="contact-section">
                    <h2 className="heading">
                        Contact <span className="highlight">me</span>
                    </h2>
                    <p className="sub-heading">Let's Connect and Collaborate on Your Next Project!</p>
                    <div className="seperator"></div>

                    <div className="contact-form">
                        <form ref={this.form} onSubmit={this.sendEmail}>
                            <input
                                type="text"
                                name="user_name"
                                className="user_name"
                                placeholder="Name (optional)"
                            />

                            <input type="email" required name="user_email" className="email" placeholder="email" />
                            <textarea name="message" className="message" placeholder="message" required></textarea>
                            <button className="btn contact-btn" type="submit" value={this.send}>
                                Contact
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="footer">Thank you for visiting my profile</footer>

                <ToastContainer />
            </div>
        );
    }
}

export default ContactUs;
