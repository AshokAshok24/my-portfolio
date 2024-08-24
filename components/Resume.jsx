import React from 'react'

const Resume = () => {
    return (
        <React.Fragment>
            <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                        <h2>Resume</h2>
                        <p>I specialize in transforming concepts into dynamic and functional web applications. With a passion for coding and a commitment to excellence, I craft solutions that not only meet client needs but also drive success. My expertise spans across frontend and backend technologies, ensuring that every project is built with precision and innovation.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Sumary</h3>
                            <div class="resume-item pb-0">
                                <h4>Ashok Kumar V G</h4>
                                <p>
                                    <em>
                                        Experienced Software Engineer with a strong background in developing scalable applications using Next.js, aiming to enhance user experience and streamline data management processes. Proven ability to deliver effective solutions in backend development and real-time data synchronization.
                                    </em>
                                </p>
                                <ul>
                                    <li>126, Thennampalayam Colony</li>
                                    <li>(+91) 8220315426</li>
                                    <li>ashok246445@gmail.com</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>Bachelor of Arts &amp; Science</h4>
                                <h5>2017 - 2020</h5>
                                <p><em>Hindustan College of Arts &amp; science</em></p>
                                <p>Bachelor of Science (CS) with 6.9 CGPA</p>
                            </div>
                            <div class="resume-item">
                                <h4>Higher Secondary</h4>
                                <h5>2015 - 2017</h5>
                                <p><em>Ramakrishna Vidhyala Hr.sec School</em></p>
                                <p>
                                    High School with 89%
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Full Stack Developer</h4>
                                <h5>Feb 2024 - Present</h5>
                                <p><em>V3 Analytics Pvt Ltd, Madurai, TamilNadu</em></p>
                                <ul>
                                    <li>
                                        Developed and implemented software solutions, collaborating with
                                        a team and managing project resources effectively
                                    </li>
                                    <li>Managed up to 3 projects at a given time while under pressure</li>
                                </ul>
                            </div>
                            <div class="resume-item">
                                <h4>BackEnd Developer</h4>
                                <h5>June 2023 - Jan 2024</h5>
                                <p><em>Geons Logix Pvt Ltd, Madurai, TamilNadu</em></p>
                                <ul>
                                    <li>
                                        Developed and optimized backend systems for marketing applications
                                        while handling multiple projects
                                    </li>
                                    <li>
                                        Collaborated with cross-functional teams to design and implement scalable solutions, improving application performance and user experience.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Hard skills</h3>
                            <div class="resume-item">

                                <ul>

                                    <h4>Front End Technology</h4>
                                    <hr />
                                    <li>HTML</li>
                                    <li>CSS, Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>ReactJS, NextJS</li>
                                    <li>Redux</li>

                                    <br />
                                    <h4>Back End Technoloy</h4>
                                    <hr />

                                    <li>NodeJS, ExpressJS</li>
                                    <li>Prisma, Socket.IO, Swagger</li>
                                    <br />

                                    <h4>Data Base</h4>
                                    <hr />

                                    <li>Mysql, SQL Server, Postgresql, MongoDB</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Soft skills</h3>
                            <div class="resume-item">

                                <ul>
                                    <li>Problem Solving Skills</li>
                                    <li>Team Collaboration</li>
                                    <li>Adaptability</li>
                                    <li>Time Management</li>
                                    <li>Attention to Detail</li>
                                </ul>


                            </div>

                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Projects</h3>
                            <div class="resume-item">
                                <h4>Vsquare Learning</h4>
                                <ul>
                                    <li>Developed a Teaching Institute Management Solution using Next.js</li>
                                    <li>Using NextJS, ReactJS, NodeJS, Mysql, Restful API, HTML, CSS</li>
                                    <li>Created a user-friendly interface for staff, students, and administrators</li>
                                    <li>Created a user-friendly interface for staff, students, and administrators</li>
                                    <li>Worked on both front-end and back-end development, creating key modules including course management, role-based authentication, and attendance tracking, while ensuring secure and efficient data handling.</li>
                                </ul>
                            </div>
                            <div class="resume-item">
                                <h4>HSI Vision (Automobile)</h4>

                                <ul>
                                    <li>Developed a Next.js-based solution to streamline product management and enhance data handling, featuring real-time data synchronization and periodic PLC data collection.
                                    </li>
                                    <li>Using NextJS, ReactJS, NodeJS, Mysql, Restful API, HTML, CSS</li>
                                    <li>Created a Role Based Authentication Like Admin, Production Admin, Dispatch Admin, Production Staff, Dispatch Staff</li>
                                    <li>Contributed to back-end development, including PLC data integration with Socket.IO and key modules for user and supplier management, as well as barcode and dataset integration
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment >
    )
}

export default Resume