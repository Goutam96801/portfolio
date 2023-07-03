import React, { Component } from 'react'
import CubeAnimation from './CubeAnimation'
import Resume from './Resume.docx';
export class About extends Component {
    render() {
        return (
            <>
                <section className="about" id="about-section">
                    <h2 className="heading">about <span className="highlight">me</span></h2>
                    <p className="sub-heading">
                        Coding is not just a profession, it's an art form
                    </p>
                    <div className="seperator"></div>

                    <div className="about-me-container">
                        <div className="left-col">
                            <div className="about-para">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td><span className='highlight'>Goutam Kumar Choudhary</span></td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth:</td>
                                            <td><span className='highlight'>May 19, 2002</span></td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td><span className='highlight'>Madhubani, Bihar, India</span></td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code:</td>
                                            <td><span className='highlight'>847235</span></td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td><span className='highlight'>gautamkumar96801@gmail.com</span></td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td><span className='highlight'>+91-7323802366</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href={Resume} className="btn" download>download cv</a>
                        </div>

                        <div className="right-col">
                            <CubeAnimation />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About
