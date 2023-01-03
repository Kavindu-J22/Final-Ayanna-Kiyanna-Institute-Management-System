import React from "react";
import "./contactfooter.css";


function Contactfooter(){

  return(

    <div className="my-contact-big">

        <div className="Contact-Footer-main">
            <footer className="myfooter">
                <div className="Fwaves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="myfooter-social-icons">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook-messenger"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>
                <ul className="myFooter-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">For-You</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p>©Sinhala Institute Of Ayanna Kiyanna | All Rights Reserved</p>
            </footer>
        
        </div> 
    </div>
  );
}
export default Contactfooter