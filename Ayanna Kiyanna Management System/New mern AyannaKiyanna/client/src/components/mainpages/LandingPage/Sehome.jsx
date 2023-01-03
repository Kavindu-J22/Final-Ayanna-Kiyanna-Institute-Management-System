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
        <h2>- The Sri Lanka's Best -<br/><span>E - Sinhala Platform</span></h2><br/>
            <div className="scontent">
              
                <div className="Sehome-largeimage-container">
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                  <img src={Sehomeimg} alt="" />
                </div>

                <div>
                <div className="sinfo">
                    <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.
                    </p>
                </div>
                <a href="#" className="selog-btn">Login - Sign Up</a>
                </div>
                
            </div>

            

            <div className="scontent">


                <div className="sinfo2">
                    <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.
                    </p>
                    <a href="#MBoxesDiv" className="info-btn">More Info</a>
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