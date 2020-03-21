import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="About">
      <h4>About this App</h4>
      <p className="aboutContainer">
        This app allows users to search up to 8 videos from the popular website
        Youtube. It also acts as a seperate app from Youtube so you can comment
        with your name without manipulating real data on youtube. We also
        respect your privacy unlike some companies out there, so no data will be
        monitored or saved!
      </p>
      <p className="aboutContainer">
        This app is was developed by Kevin W. and Dug M.
      </p>
    </div>
  );
};

export default About;
