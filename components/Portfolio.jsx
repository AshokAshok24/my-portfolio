import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
    return (
        <React.Fragment>
            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/ashok.jpeg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/ashok.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/ashok.jpeg" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/ashok-side.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/ashok-side.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/ashok-side" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/back.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/back.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/back.jpg" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div class="portfolio-wrap">
                                <img src="assets/img/straight.jpeg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/straight.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/straight.jpeg" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div class="portfolio-wrap">
                                <img src="assets/img/waterfall.jpeg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/waterfall.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/waterfall.jpeg" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div class="portfolio-wrap">
                                <img src="assets/img/jeep.jpeg" class="img-fluid" alt="" />
                                <div class="portfolio-links">
                                    <Link href="assets/img/jeep.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></Link>
                                    <Link href="assets/img/jeep.jpeg" title="More Details"><i class="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </React.Fragment >
    )
}

export default Portfolio