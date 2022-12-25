import React from "react";
import "./imageslider.css";
import { Link } from "react-router-dom";
import Si1 from "../../assets/images/si1.png"
import Si2 from "../../assets/images/si2.png"
import Si3 from "../../assets/images/si3.png"
import Si4 from "../../assets/images/si4.png"
import Si5 from "../../assets/images/si5.png"

function Imageslider(){

  return(
    <div className="sbody">
      <section className="section">
        <div className="sslider">
            <div className="sslide">
              <input type= "radio" name="sradio-btn" id="sradio1" />
              <input type= "radio" name="sradio-btn" id="sradio2" />
              <input type= "radio" name="sradio-btn" id="sradio3" />
              <input type= "radio" name="sradio-btn" id="sradio4" />
              <input type= "radio" name="sradio-btn" id="sradio5" />

              <div className="simg-container frist">
                  <img src={Si1} />
              </div> 

              <div className="simg-container">
                  <img src={Si2} />
              </div> 

              <div className="simg-container">
                  <img src={Si3} />
              </div>

              <div className="simg-container">
                  <img src={Si4} />
              </div>

              <div className="simg-container">
                  <img src={Si5} />
              </div>  

              <div className="snav-auto">
                <div className="sa-b1"></div>
                <div className="sa-b2"></div>
                <div className="sa-b3"></div>
                <div className="sa-b4"></div>
                <div className="sa-b5"></div>
              </div> 
            </div>

            <div className="nav-m">
                <label for="sradio1" className="m-btn"></label>
                <label for="sradio2" className="m-btn"></label>
                <label for="sradio3" className="m-btn"></label>
                <label for="sradio4" className="m-btn"></label>
                <label for="sradio5" className="m-btn"></label>
            </div>
              
          </div> 
      </section>
    </div>
  );
}
export default Imageslider