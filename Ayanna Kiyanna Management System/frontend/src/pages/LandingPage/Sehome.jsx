import React from "react";
import "./sehome.css";
import Logo from "../../assets/images/AKlogo.png"
import { Link } from "react-router-dom";

function Sehome(){

  return(

    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <section className="Sehome">
            <header>
                <img class="selogo" src={Logo} alt=""/>
                <div className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Info</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </header>
            <div className="scontent">
                <div className="sinfo">
                    <h2>ලෝබ නැතුව සතර බෙදන <br/>අසිරිමත් බුද්ධි මෙහෙවර !<span></span></h2>
                    <p>A motivated, adaptable, and responsible computing undergraduate
                        seeking a position in an IT position which will utilize the professional,
                        technical and skills developed through keep practicing in this field. I can provide clean code and pixel
                        perfect design.
                    </p>
                    <a href="#" className="info-btn">More Info</a>
                </div>
            </div>
            <div className="media-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </section> 
    </div>
  );
}
export default Sehome