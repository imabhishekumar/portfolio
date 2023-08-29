import { AiFillHome, AiFillSetting, AiFillContacts, AiFillProject, AiOutlineArrowUp } from "react-icons/ai"
import { FaFileDownload} from "react-icons/fa"
import resume from '../assets/Abhishek.pdf'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './navbar.css'

export default function Navbar(){
    
    var Scroll = require('react-scroll');
    var scroll    = Scroll.animateScroll;
    function scrollToTop(){
        scroll.scrollToTop();
    }


    const [stickyClass, setStickyClass] = useState('');
  
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        let windowWidth = window.innerWidth;
        (windowHeight > 300 && windowWidth > 576) ? setStickyClass('sticky-nav') : setStickyClass('');
      }

    }

    return(
        <>
            <div className={`navbar ${stickyClass}`} id="navbar">
                <div className="brand">
                    <p className="brand-name">Abhishek kumar</p>
                </div>
                <div className="nav-link">
                    <p><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></p>
                    <p><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></p>
                    <p><Link to="project" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></p>
                    <p><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></p>
                </div>
            </div>

            <div className="scrollToTop" onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}><AiOutlineArrowUp /></div>

            <div>
                <div className="left-navbar">
                    <div className="nav-link-left">
                        <p><Link to="about" spy={true} smooth={true} offset={50} duration={500}><AiFillHome /><span>About</span></Link></p>
                        <p><Link to="skills" spy={true} smooth={true} offset={50} duration={500}><AiFillSetting /><span>Skills</span></Link></p>
                        <p><Link to="project" spy={true} smooth={true} offset={50} duration={500}><AiFillProject /><span>Projects</span></Link></p>
                        <p><Link to="contact" spy={true} smooth={true} offset={50} duration={500}><AiFillContacts /><span>Contact</span></Link></p>
                        <a href={resume} download="Resume"><p><FaFileDownload /><span>CV</span></p></a>
                    </div>
                </div>
            </div>


        </>
    )
}