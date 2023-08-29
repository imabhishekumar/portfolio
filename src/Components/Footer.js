import './footer.css'
import { FaFacebookSquare, FaTwitterSquare,FaLinkedin,FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Footer(){
    return(
        <>
            <div className="footer-wrapper">
                <div>
                    <div className="brand">
                        <p className="brand-name">Abhishek kumar</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="footer-header ">Let's Connect </p>
                        <a href="https://www.facebook.com/profile.php?id=100010939201217" target="_blank"><FaFacebookSquare className="footer-icons"/></a>
                        <a href="https://twitter.com/Imabhishekumar1?t=ccz1kLHJZYxc9NEkr-PvOQ&s=09" target="_blank"><FaTwitterSquare className="footer-icons"/></a>
                        <a href="https://www.linkedin.com/in/abhishek-kumar-1841731b7" target="_blank"><FaLinkedin className="footer-icons"/></a>
                        <a href="https://www.instagram.com/Imabhishekumar?fbclid=IwAR3jYkOvhO20VJtVD8-GZE4rJoBYMlvEjD529oN5ZlcWOmLVrfYwcsIBAWI" target='_blank'><FaInstagramSquare className="footer-icons"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}