import React from 'react'
import Footer from './Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter()
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

                            <li><Link href={'/'} className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                            <li><Link href="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li><Link href={'/#skills'} className="nav-link scrollto"><i className="bx bx-user"></i> <span>Skills</span></Link></li>
                            <li><Link href={'/#resume'} className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                            <li><Link href={'/#portfolio'} className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
                            <li><Link href={'/#services'} className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
                            <li><Link href={'/#contact'} className="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></Link></li >
                        </ul>
                    </nav >

                </div >
            </header >




        </React.Fragment >
    )
}

export default Header