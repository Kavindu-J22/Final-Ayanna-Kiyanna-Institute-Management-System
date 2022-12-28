import React from "react";
import "./boxes.css";
import { Link } from "react-router-dom";
import Ask from "../../assets/images/Ask.png"
import jayasinhala from "../../assets/images/Jayasinghala.png"
import Potha from "../../assets/images/yourbook.png"
import panthiya from "../../assets/images/apesinhala.png"

function boxes(){

  return(
    <div className="jumbotronbox">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        <h2>- අප සමග එකතු වී පහත සේවාවන් භුක්ති විඳින්න -</h2>
        <h3>Login With Us and Get this Features</h3>

        <div class="bcenter">

            <div className="bcards">
           
                    <div class="bcol-sm">
                        <div className="bbg-image" >
                            <img class="bimage-lgs" src={panthiya} alt=""/>
                            <h5>- අපේ සිංහල පන්තිය -</h5>
                        </div>
                    </div>

                    <div class="bcol-sm">
                        <div className="bbg-image" >
                            <img class="bimage-lgs" src={Ask} alt=""/>
                            <h5>- ජගත් සර්ගෙන් අහන්න -</h5>
                        </div>
                    </div>

                    <div class="bcol-sm">
                        <div className="bbg-image" >
                            <img class="bimage-lgs" src={Potha} alt=""/>
                            <h5>- ඔබේ සටහන් පොත -</h5>
                        </div>
                    </div>

                    <div class="bcol-sm">
                        <div className="bbg-image" >
                            <img class="bimage-lgs" src={jayasinhala} alt=""/>
                            <h5>- LET'S JOIN -</h5>
                        </div>
                    </div>

            </div>  

        </div>

         
    </div>
    
    )
  }
  export default boxes