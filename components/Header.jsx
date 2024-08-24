import React from 'react'
import Footer from './Footer';

const Header = () => {

    const [sidebarVisible, setSidebarVisible] = React.useState(true);

    return (
        <React.Fragment>

            <i className={`bi bi-list d-xl-none ${sidebarVisible ? "mobile-nav-toggle" : "mobile-nav-active"}`} onClick={() => { setSidebarVisible(sidebarVisible) }}></i>

            <header id="header" className=''>
                <div class="d-flex flex-column">

                    <div class="profile">
                        <img src="assets/img/ashokformal.jpeg" alt="" class="img-fluid rounded-circle" style={{ height: "150px", width: "150px" }} />
                        <h1 class="text-light"><a href="index.html">Ashok Kumar</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                            <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Skills</span></a></li>
                            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>

                </div>
            </header>




        </React.Fragment>
    )
}

export default Header