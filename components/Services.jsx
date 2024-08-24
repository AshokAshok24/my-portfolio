import React from 'react'

const Services = () => {
    return (
        <React.Fragment>
            <section id="services" class="services">
                <div class="container">

                    <div class="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div class="icon">
                                <i class="bi bi-briefcase"></i>
                                <img src="/assets/img/React.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">React JS</a></h4>
                            <p class="description">
                                Build dynamic and responsive user interfaces with React JS, leveraging its component-based architecture for efficient and scalable web applications
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon">
                                <i class="bi bi-card-checklist"></i>
                                <img src="/assets/img/Next.js.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">Next JS</a></h4>
                            <p class="description">
                                Create fast and optimized web applications with Next JS, a powerful React framework that supports server-side rendering and static site generation.                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon">
                                <i class="bi bi-bar-chart"></i>
                                <img src="/assets/img/Node.js.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">Node JS</a></h4>
                            <p class="description">
                                Develop robust and scalable backend solutions with Node JS, utilizing its non-blocking, event-driven architecture to handle high-concurrency applications
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon">
                                <i class="bi bi-binoculars"></i>
                                <img src="/assets/img/MySQL.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">MySQL</a></h4>
                            <p class="description">
                                Design and manage relational databases with MySQL, ensuring data integrity, security, and high performance for complex applications
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div class="icon">
                                <i class="bi bi-brightness-high"></i>
                                <img src="/assets/img/PostgresSQL.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">PostgreSQL</a></h4>
                            <p class="description">
                                Implement advanced database features with PostgreSQL, a powerful and open-source relational database system known for its extensibility and SQL compliance.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                            <div class="icon">
                                <i class="bi bi-calendar4-week"></i>
                                <img src="/assets/img/MongoDB.svg" alt="" />
                            </div>
                            <h4 class="title"><a href="">MongoDB</a></h4>
                            <p class="description">
                                Work with MongoDB, a leading NoSQL database, to build flexible and scalable data models, ideal for handling large volumes of unstructured data                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment >
    )
}

export default Services