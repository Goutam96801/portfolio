import React, { Component } from 'react'
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.svg'
import project4 from './project4.png'
import project5 from './project5.png'
import project6 from './project6.png'

export class Project extends Component {
    render() {
        return (
            <div>
                <section className="project" id="project-section">
                    <h2 className="heading">Project<span className="highlight">s</span></h2>
                    <p className="sub-heading">
                        A program is never finished until the last user dies
                    </p>
                    <div className="seperator"></div>
                    <div className="project-container">
                        <div className="project-card">
                            <img src={project1} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">LIC Agent Portal</h1>
                                <a href='https://github.com/Goutam96801/LIC_AGENT_HELPER.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project2} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">Blog Interface</h1>
                                <a href='https://github.com/Goutam96801/Blogging_Interface.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project3} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">Books Record Management System</h1>
                                <a href='https://github.com/Goutam96801/Book-Record-Management.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project4} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">Text Converter</h1>
                                <a href='https://github.com/Goutam96801/TextConverter.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project5} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">Task Management App</h1>
                                <a href='https://github.com/Goutam96801/Task-Management-Application.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project6} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">Zomato Clone</h1>
                                <a href='https://github.com/Goutam96801/Shopping_Page.git' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Project
