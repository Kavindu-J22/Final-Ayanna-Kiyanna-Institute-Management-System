import React from "react";
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video2.mp4";
import AKlogo from "../../assets/images/AKlogo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import About from "./About"
import Sehome from "./Sehome"

export default function Starting({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div className="fullmain">
      <section class="home">
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
            <h1>Welcome to <span>අයන්න කියන්න..!</span></h1>
            <h2>- ජගත් කුමාර ජයසිංහ -</h2><br />
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
              <button id ="LGbtnA" type="submit">Connect With Us</button>
              </Link>
            </form>
          </div>
        </div>
      </section>

        <div>
          <hr/>
          <Sehome/>
          <hr/>
          <About/>
        </div>    
      

    </div>
  );
}
 