import React, { Component } from 'react'
import profileImage from './profile.png';
export class Home extends Component {
    handleClick = (event, sectionId) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        this.setState({ activeLink: sectionId });
    };
    render() {
        return (
            <div>
                <section className="home">
                    <div className="hero-content">
                        <h1 className="hero-heading">
                            <span className="highlight">hey there!</span
                            ><br />i am goutam choudhary
                        </h1>
                        <p className="profession">software developer</p>
                        <p className="info">
                            <span className="highlight">Hi!</span> I'm Goutam, and I'm a 2nd year
                            student at Chandigarh University. I'm studying computer science, and
                            I really love it! I'm interested in learning more about how
                            computers work, and I have been working on my own projects that
                            combine coding and art.
                        </p>
                        <a className="btn" href="#contact" onClick={(e) => this.handleClick(e, "contact")}>Contact Me</a>

                    </div>
                    <img src={profileImage} className="image" alt="profile-image" />
                </section>

            </div>
        )
    }
}

export default Home
