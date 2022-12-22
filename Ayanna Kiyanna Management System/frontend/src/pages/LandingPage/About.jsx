import React from "react";
import "./about.css";
import Ayanna from "../../assets/images/Ayanna.png"
import { Link } from "react-router-dom";

function About(){

  return(

    <div>
      <section class="about">
            <div class="main">
                <img class="image-About" src={Ayanna} alt=""/>
                <div class="about-text">
                    <h2>අපි ගැන යමක්..</h2>
                    <h5>ශ්‍රී ලංකාවේ හොඳම <span>E-සිංහල </span>අධ්‍යාපන කේන්ද්‍රය</h5>
                    <p> A motivated, adaptable, and responsible computing undergraduate
                        seeking a position in an IT position which will utilize the professional,
                        technical and skills developed through keep practicing in this field. I can provide clean code and pixel
                        perfect design. I also make the website mere & more interactive with web animations.</p>
                        <button type="button">Let's Talk</button>     
                </div>
            </div>
        </section> 
    </div>
  );
}
export default About
 