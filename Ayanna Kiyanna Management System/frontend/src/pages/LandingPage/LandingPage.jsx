import React from "react";
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video2.mp4";
import AKlogo from "../../assets/images/AKlogo.png"
import Ayanna from "../../assets/images/Ayanna.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Starting({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div>
      <section>
       <div className="header">
         <video
           autoPlay
           loop
           muted
           class = "back-video">
            <source src={backgroundTheme} type="video/mp4" />
          </video>

          <div className="content">
            <img className="logo1" src= {AKlogo}  alt="" />
            <h1>Welcome to <span>Ayanna Kiyanna..!</span></h1>
            <h2>Jagath Kumara Jayasinghe</h2><br />
            <p>A motivated, adaptable, and responsible computing undergraduate
                        seeking a position in an IT position which will utilize the professional,
                        technical and skills developed through keep practicing in this field. I can provide clean code and pixel
                        perfect design. I also make the website mere & more interactive with web animations.
            </p><br/>

            <form>
              <Link to="/login">
              <button id ="LGbtn" type="submit">Explore</button>
              </Link>
              <br /><br />
              <Link to="/teacher-login">
              <button id ="LGbtnA" type="submit">Register With Us</button>
              </Link>
            </form>
          </div>
        </div>
      </section>









      <section class="about">
            <div class="main">
                <img class="image-About" src={Ayanna} alt=""/>
                <div class="about-text">
                    <h2>About Us</h2>
                    <h5>Institute <span>& Education Hub</span></h5>
                    <p> A motivated, adaptable, and responsible computing undergraduate
                        seeking a position in an IT position which will utilize the professional,
                        technical and skills developed through keep practicing in this field. I can provide clean code and pixel
                        perfect design. I also make the website mere & more interactive with web animations.</p>
                        <button type="button">Let's Talk</button>

                        
                </div>
            </div>
        </section>

      <section class="about"> 
      <div class="main">
        
        </div>
      </section>  
    </div>
  );
}
 