import React from 'react'
import { Link } from "react-router-dom";
import Staklogo from '../../../../assets/images/AKlogo.png'
import backbtnmy from '../../../../assets/images/B.png'


function MainGradeNine() {

    return ( 

            <div className="v-main-box">
   
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>

            <section className='v-section'>
                    <div className='v-text-container'>
                        <h1>✥ 9 ශ්‍රේණිය </h1>
                        <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    </div>
                    <div className='v-cards'>
                        <div className='v-text-card'>
                            <div className='v-content '>
                                <h2>01</h2>
                                
                                <h3>පෙළ පොත</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                            </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>02</h2>
                                
                                <h3>ව්‍යාකරණ පාඩම්</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>03</h2>
                                
                                <h3>සාහිත්‍ය පාඩම්</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card'>
                            <div className='v-content'>
                                <h2>04</h2>
                                
                                <h3>ප්‍රශ්න පත්‍ර</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>05</h2>
                                
                                <h3>වෙනත් විශේෂිත සටහන්</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>06</h2>
                                
                                <h3>වීඩියෝ පාඩම්</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                        <div className='v-text-card' id='v-text-card-lastitem'>
                            <div className='v-content'>
                                <h2>07</h2>
                                
                                <h3>විෂය නිර්දේශය</h3>
                                <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                                <Link className='v-link' to="#">Explore</Link>
                                </div>
                        </div>

                    </div>
                
            </section>
            
            </div>
            
    )
}

export default MainGradeNine