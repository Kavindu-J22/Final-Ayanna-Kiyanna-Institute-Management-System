import React from "react";
import "./contactfooter.css";


function Contactfooter(){

  return(

        <div className="Contact-Footer-main">

        <div className="Contactinfo-mainmy-box">
                  <div>
                  <div className="sinfo">
                      <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.
                      </p>
                  </div>
                  <div>
                      <a href="#" className="selog-btn">Login - Sign Up</a>
                      <a href="#" className="selog-btn">View Menu</a>
                    </div>
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