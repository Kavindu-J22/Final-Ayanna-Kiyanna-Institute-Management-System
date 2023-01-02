import React from "react";
import "./about.css";
import Ayanna from "../../assets/images/Ayanna.png"
import { Link } from "react-router-dom";
import Abt1 from "../../assets/images/Abt1.png"
import Abt2 from "../../assets/images/Abt2.png"
import Abt3 from "../../assets/images/Abt3.png"

function About(){

  return(

    <div>
      <section class="about">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className='newthinkMenu'><Link  to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link>
                </div> 

            <div class="about-main">
                <img class="image-About" src={Ayanna} alt=""/>
                <div class="about-text">
                    <h1>අප ගැන යමක්..</h1>
                    <h5>ශ්‍රී ලංකාවේ හොඳම <span>E-සිංහල </span>අධ්‍යාපන කේන්ද්‍රය</h5>
                    <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.</p>
                    <button className="Abt-btn" type="button">Join With Us</button>

                    {/* <div className="C-root-box">
                      <a href="#SemomeDiv">
                        <button type="button" id="Abtn">Get Service</button>
                      </a>
                      <a href="#OurAcadaminDiv">
                        <button type="button" id="NAbtn">More About</button>
                      </a>
                      
                    </div> */}
                </div>
            </div>
          

          

          <div className="About-Card-container">
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt1} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Vishion</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව 
                        තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් 
                        දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt2} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Our Mishion</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව
                         තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන්
                          දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>
            <div className="About-card">
                <div className="About-imgbx">
                    <img src={Abt3} alt="" />
                </div>
                <div className="About-card-content">
                      <h3>Achivements</h3>
                      <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව
                         තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන්
                          දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                </div>
            </div>

          </div>


        </section> 
    </div>
  );
}
export default About
 