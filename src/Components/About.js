import photo from "../assets/photo2.jpg"
import react from "../assets/react-js-icon.svg"
import node from "../assets/node-js-icon.svg"
import js from "../assets/js-icon.svg"
import './about.css'
export default function About(){
    return(
        <>
            <div className="about-wrapper" id="about">

                <div className="about-image">
                    <img src={photo} />
                </div>
                <div className="about-skills">
                    <div className="circle" id="circle1">
                        <div className="inside"><img src={react}/></div>
                    </div>
                    <div className="circle" id="circle2">
                        <div className="inside"><img src={node}/></div>
                    </div>
                    <div className="circle" id="circle3">
                        <div className="inside"><img src={js}/></div>
                    </div>
                </div>
                <div className="about-intro">
                    <p className="greet">Hey, I'm</p>
                    <p className="name"> Abhishek Kumar</p>
                    <p className="profession">Frontend Developer</p>
                </div>
                
                
            </div>
        </>
    )
}