import React from "react";
import "./sehome.css";
import { Link } from "react-router-dom";
import Sehomeimg from "../../assets/images/SEphoto.png"

function Sehome(){

  return(

    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
      <section className="Sehome">
        <div className="se-anime-back">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      <div className='newthinkMenu'><Link  to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
        <h2>- The Sri Lanka's Best -<br/><span>✠ E - Sinhala Platform ✠</span></h2><br/>
            <div className="scontent">
              
                <div className="Sehome-largeimage-container">
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                </div>

                <div className="Sinfo-mainmy-box">
                  <div>
                  <div className="sinfo">
                      <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.
                      </p>
                  </div>
                    <div className="Selogbtn_main-box">
                      <a href="#" className="selog-btn">➥ Login - Sign Up</a>
                      <a href="#" className="selog-btn">⛚ View Menu</a>
                    </div>
                  </div>
                </div>
                  
            </div>

           <div className="Semenutitlebox">
            <h2>● Go Thoruth And Explore ●</h2>
          </div>

          <div className="info-Awsome-container">

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="Home">
              <i class="fa-solid fa-house"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Home</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="About">
              <i class="fa-regular fa-address-card"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>About</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="Info">
              <i class="fa-solid fa-circle-info"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Info</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="Services">
              <i class="fa-solid fa-book"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Services</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="ForYou">
              <i class="fa-solid fa-file-pen"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>For-You</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

            <div className="info-Awsome-container-card">
              <div className="info-Awsome-container-imgbx" data-text="Contact">
              <i class="fa-solid fa-square-phone-flip"></i>
              </div>
              <div className="info-Awsome-container-content">
                <div>
                  <h3>Contact</h3>
                  <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                     නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූය.</p>
                  <a href="#">Let's Go</a>
                </div>
              </div>
            </div>

          </div>  

            


            <div className="smedia-icons">
                <a href="https://www.facebook.com/profile.php?id=100066826185077"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.youtube.com/@ayannakiyanna2242/videos"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>




        </section> 
    </div>
  );
}
export default Sehome