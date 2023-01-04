import React from "react";
import "./contactfooter.css";


function Contactfooter(){
    var i;
  return(
   
        <div className="Contact-Footer-main">

        <div className="Contactinfo-mainmy-box">

            <div className="SosialIconRack">
                <ul>
                    <li style={i} id="SR1"><a href="#"><span><i class="fa-brands fa-facebook"></i></span> facebook</a></li>
                    <li style={i} id="SR2"><a href="#"><span><i class="fa-brands fa-whatsapp"></i></span> whatsapp</a></li>
                    <li style={i} id="SR3"><a href="#"><span><i class="fa-brands fa-facebook-messenger"></i></span> Massenger</a></li>
                    <li style={i} id="SR4"><a href="#"><span><i class="fa-brands fa-instagram"></i></span> instagram</a></li>
                    <li style={i} id="SR5"><a href="#"><span><i class="fa-brands fa-youtube"></i></span> Youtube</a></li>
                    <li style={i} id="SR6"><a href="#"><span><i class="fa-solid fa-envelope"></i></span> G-Mail</a></li>
                </ul>
            </div>
        </div>

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
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
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
                <li className="mymymy">Wbe Developer and Designer :<a href="https://github.com/Kavindu-J22"> @Kavindu Jayasinghe</a></li>
            </footer>
        
        </div> 
    
  );
}
export default Contactfooter