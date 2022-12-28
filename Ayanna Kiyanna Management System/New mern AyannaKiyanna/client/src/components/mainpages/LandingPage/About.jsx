import React from "react";
import "./about.css";
import Ayanna from "../../assets/images/Ayanna.png"
import { Link } from "react-router-dom";

function About(){

  return(

    <div>
      <section class="about">
            <div class="main">
                <img class="image-About" src={Ayanna} alt=""/>
                <div class="about-text">
                    <h2>අප ගැන යමක්..</h2>
                    <h5>ශ්‍රී ලංකාවේ හොඳම <span>E-සිංහල </span>අධ්‍යාපන කේන්ද්‍රය</h5><hr class="Abhr"/>
                    <p> “අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය. සිංහල විෂය සාධන මට්ටම ඉහළ දැමීම මෙන් ම ළමා මණසෙහි සියුම් වූ වේදයිතයන් අවදිකර රසවින්දනයෙන් පෝෂිත සමාජයක් බිහිකරලීම මෙම සඟරාව කිරීමෙහි මූලික අභිලාෂයයි.</p>
                        <button type="button">See More</button>     
                </div>
            </div>
        </section> 
    </div>
  );
}
export default About
 