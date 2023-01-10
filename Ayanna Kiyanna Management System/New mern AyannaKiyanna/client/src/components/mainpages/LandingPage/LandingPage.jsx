import React, {useContext} from 'react'
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video8.mp4";
import AKlogo from "../../assets/images/AKlogo.png"
import AKWelcome from "../../assets/images/Ayannawelcome.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import About from "./About"
import Sehome from "./Sehome"
import Boxes from "../Other/Boxes"
import {GlobalState} from '../../../GlobalState'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration:1500
});

export default function Starting({ history }) {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div className="fullmain" data-aos="fadeInUp">
      <section class="home">
       <div className="header" data-aos="fadeInUp">
         <video
           autoPlay
           loop
           muted
           class = "back-video">
            <source src={backgroundTheme} type="video/mp4" />
          </video>

          <div className="content">
            <img className="logo1" id='homeID' src= {AKlogo}  alt="" /><br/>
            <img className="logo2" src= {AKWelcome}  alt="" />
            <h2>- ජගත් කුමාර ජයසිංහ -</h2><br />
            <p>“අයන්න කියන්න” මංගල කලාපය හුදෙක් දැනුම පමණක් කෙන්ද්‍ර කරගත්තක් නොවන්නේ ය. දැනුම වැඩි වැඩියෙන් ලබා දීම ඉදිරි කලාපයන්ට තබා අප කවුද, මොනවද කරන්නේ යන්න පිළිබඳ ව අප පාඨක රසවතුන් වෙත කියා පෑමට වැඩි ඉඩක් මෙතුළ වෙන් වී ඇත. සිංහල භාෂාව කෙරෙහි අපගෙන් ලැබී ඇති දායකත්වය පිළිබද ව ඇතැම් දෙය පවා මෙතුළින් විද්‍යමාන වන්නේ ය. නමුත් නුදුරු අනාගතයේ දී ම අමුතු ම ගණයේ සිංහල අධ්‍යාපනික සඟරාවක් බවට මෙය පත්වනු ඇත.
            </p><br/>

            <div className="landing1stBtns">

              <a href="#MAboutDiv" id ="Scrolbtn"><span>Explore</span></a>
              {
               isLogged ? <Link to="#" id ="LGbtnA" type="submit"><span>Connected</span></Link> : <Link to="/login" id ="LGbtnA" type="submit"><span>Connect With Us</span></Link>
              }

            </div>
          </div>

          <div className='fristaflandsosialicon'>
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-facebook-messenger"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
          </div>

        </div>
      </section>

      <div className="cantainer">

          <div className="ncard" id="MAboutDiv" data-aos="fadeInUp">
            <About/>
          </div>

          <div className="ncard" id="SemomeDiv" data-aos="fadeInUp">
            <Sehome/>
          </div>
          
          <div className="ncard" id="MBoxesDiv" data-aos="fadeInUp">
            <Boxes/>
          </div>
      </div> 

    </div>
  );
}
 