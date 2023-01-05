import React from "react";
import "./contactfooter.css";


function Contactfooter(){
    
  return(
   
        <div className="Contact-Footer-main">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <div className="Contactmainf-body">
            <div className="Contactmainf-content">

                <div className="Contactmainf-title">
                    <h2>Contact Us</h2>
                </div>
                <div className="Contactmainf-threeboxes">

                    {/* contact form */}


                    <div className="contact form">

                        <div className="contact-form-container">
                            <h2>ඔබේ අදහස් අපට කියන්න..</h2>
                        <form action="https://formsubmit.co/5294a6e917673f61dce93c6564bd8d5c" method="POST">
                            <div className="ctrow100">
                                <div className="ctcol">
                                    <div className="ctinpubox">
                                        <input type="text" name="FristName" required="required" />
                                        <span className="cttext">frist name</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                                <div className="ctcol">
                                    <div className="ctinpubox">
                                        <input type="text" name="LastName" required="required" />
                                        <span className="cttext">Last name</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="ctrow100">
                                <div className="ctcol">
                                    <div className="ctinpubox">
                                        <input type="email" name="E-Mail" required="required" />
                                        <span className="cttext">E-mail</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                                <div className="ctcol">
                                    <div className="ctinpubox">
                                        <input type="number" name="Phone" required="required" />
                                        <span className="cttext">Mobile</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="ctrow1001">
                                <div className="ctcol">
                                    <div className="ctinpubox">
                                        <input type="text" name="About-What" required="required" />
                                        <span className="cttext">About What.?</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                                <div className="ctcol">
                                    <div className="ctinpubox textaera">
                                        <textarea type="text" name="Message" required="required"></textarea>
                                        <span className="cttext">Type Your Message Here..</span>
                                        <span className="ctline"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="ctrow100">
                                <div className="ctcol">
                                    <input type="submit" value="send" />
                                </div>      
                            </div>
                        </form>
                        </div>
                    </div>




                    {/* info box */}
                    <div className="contact info"></div>

                    {/* map box */}
                    <div className="contact map"></div>
                </div>

            </div>
                     
        </div>

        <div className="Contactinfo-mainmy-box">

            <div className="SosialIconRack">
                <ul>
                    <li id="SR1"><a href="#"><span><i class="fa-brands fa-facebook"></i></span> facebook</a></li>
                    <li id="SR2"><a href="#"><span><i class="fa-brands fa-whatsapp"></i></span> whatsapp</a></li>
                    <li id="SR3"><a href="#"><span><i class="fa-brands fa-facebook-messenger"></i></span> Massenger</a></li>
                    <li id="SR4"><a href="#"><span><i class="fa-brands fa-instagram"></i></span> instagram</a></li>
                    <li id="SR5"><a href="#"><span><i class="fa-brands fa-youtube"></i></span> Youtube</a></li>
                    <li id="SR6"><a href="#"><span><i class="fa-solid fa-envelope"></i></span> G-Mail</a></li>
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
                <p>©Sinhala Institute Of Ayanna Kiyanna | All Rights Reserved : 2023</p>
                <li className="mymymy">Wbe Developer and Designer :<a href="https://github.com/Kavindu-J22"> @Kavindu Jayasinghe</a></li>
            </footer>
        
        </div> 
    
  );
}
export default Contactfooter