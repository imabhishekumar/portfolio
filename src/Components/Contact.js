import "./contact.css"
import resume from '../assets/Abhishek.pdf'
import { FaFileDownload} from "react-icons/fa"
import mail from '../assets/mail.jpg'

export default function Resume(){
    return(
        <>
            {/* <div className="contact">
                <label className="skill-title">__Contact</label>
                <a href={resume} download="Resume">
                    <div className="resume-download">Download <FaFileDownload /></div>
                </a>
            </div> */}

            <div className="contact-wrapper magicpattern" id="contact">
                <div className="contact-container">
                    <div className="contact-image">
                        <img src={mail} />
                    </div>
                    <div className="contact-details">
                        <h3 className="contact-heading"> Send me a message! </h3>
                        <form>
                            <div className="form-group form-name">
                                <label for="name-box" className="label">Name</label>
                                <input type="text" placeholder="Enter your Name" id="name-box" name="name" className="contact-input" required=""/>
                            </div>
                            <div className="form-email form-group">
                                <label for="email-box" className="label">Email</label>
                                <input type="email" placeholder="Enter a valid email address" id="email-box" name="email" className="contact-input" required="" />
                            </div>
                            <div className="form-group form-message">
                                <label for="message-box" className="label">Message</label>
                                <textarea placeholder="Your Message" rows="4" cols="50" id="message-box" name="message" className="contact-input" required=""></textarea>
                            </div>
                            <button className="contact-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
