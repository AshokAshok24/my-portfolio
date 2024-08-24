import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <React.Fragment>
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                        <h2>About</h2>
                        <p>
                            Experienced Software Engineer with a strong background in developing scalable applications using Next.js, aiming to enhance user experience and streamline data management processes. Proven ability to deliver effective solutions in backend development and real-time data synchronization.
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/ashok1.jpeg" class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Full Stack Developer</h3>
                            <p class="fst-italic" style={{ color: "black", fontWeight: 'bolder' }}>
                                ReactJS, NextJS, NodeJS, ExpressJS, Mysql, SQLServer, MongoDB, postgreSQL, HTML, CSS, Bootstrap, Prisma, Swagger
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>24 June 2000</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span><Link href="https://my-portfolio-eight-alpha-27.vercel.app">View Here</Link></span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8220315426</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tirupur, TamilNadu</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.sc (computer science)</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ashok246445@gmail.com</span></li>
                                        <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>-</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                A skilled and dedicated Full Stack Developer with expertise in modern web development technologies. Proficient in both frontend and backend frameworks, with experience in databases including MySQL, SQLServer, MongoDB, and PostgreSQL. Adept at creating responsive and dynamic web applications using ReactJS, NextJS, NodeJS, and ExpressJS. Strong problem-solving abilities and a passion for continuous learning. Always ready to take on new challenges and deliver high-quality solutions.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default About