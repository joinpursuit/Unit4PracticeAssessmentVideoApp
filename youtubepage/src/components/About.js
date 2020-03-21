import React from "react";
import "../css/About.css";

const About = () => {
    return(
        <div className="aboutDiv">
            <h1 className="aboutTitle">About</h1>
            <p className="aboutParagraph">This is a Youtube playing application that handles two Google APIs using an authorized API key. All results are based off the youtube algorithms and fully handles Youtube video player along with commentors and comments. This App was developed by Jovanni Luna. </p>
        </div>
    )
} 

export default About;