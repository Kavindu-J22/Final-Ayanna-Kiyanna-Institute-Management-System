import React from "react";
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video2.mp4";
import AKlogo from "../../assets/images/AKlogo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import About from "./About"
import Sehome from "./Sehome"
import Boxes from "./Boxes"

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
            <p>“අයන්න කියන්න” මංගල කලාපය හුදෙක් දැනුම පමණක් කෙන්ද්‍ර කරගත්තක් නොවන්නේ ය. දැනුම වැඩි වැඩියෙන් ලබා දීම ඉදිරි කලාපයන්ට තබා අප කවුද, මොනවද කරන්නේ යන්න පිළිබඳ ව අප පාඨක රසවතුන් වෙත කියා පෑමට වැඩි ඉඩක් මෙතුළ වෙන් වී ඇත. සිංහල භාෂාව කෙරෙහි අපගෙන් ලැබී ඇති දායකත්වය පිළිබද ව ඇතැම් දෙය පවා මෙතුළින් විද්‍යමාන වන්නේ ය. නමුත් නුදුරු අනාගතයේ දී ම අමුතු ම ගණයේ සිංහල අධ්‍යාපනික සඟරාවක් බවට මෙය පත්වනු ඇත.
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
          <hr class="Myhr"/>
          <Sehome/>
          <hr class="Myhr"/>
          <About/>
          <hr class="Myhr"/>
          <Boxes/>
        </div>    
      

    </div>
  );
}
 