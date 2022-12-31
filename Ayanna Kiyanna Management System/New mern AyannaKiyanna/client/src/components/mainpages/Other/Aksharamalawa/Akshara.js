import React from 'react'
import { Link } from "react-router-dom";
import "./akshara.css"


function AksharaMalawa() {

    return (
        <div className="AksharaMalawa-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className='AksharaMalawa-section'>
                <div className='AksharaMalawa-container'>
                <h1>✥ අක්ෂර මාලාව </h1>
                    <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    <div className='AksharaMalawa-cards'>
                        <div className='AksharaMalawa-text-card' id='AksharaMalawa-card1'>
                        <Link className='AksharaMalawa-link' to="#">
                            
                            <h3>නූතන සිංහල වර්ණ මාලාව</h3>
                            <i class="fa-solid fa-newspaper"></i>
                               
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className='AksharaMalawa-section'>
                <div className='AksharaMalawa-container'>

                    <div className='AksharaMalawa-cards'>
                        
                        <div className='AksharaMalawa-text-card'>
                        <Link className='AksharaMalawa-link' to="#">
                            
                            <h3>ස්වර</h3>
                            <i class="fa-solid fa-newspaper"></i>
                            
                        </Link>
                        </div>
                        <div className='AksharaMalawa-text-card'>
                        <Link className='AksharaMalawa-link' to="#">
                            
                            <h3>ව්‍යංජන</h3>
                            <i class="fa-solid fa-newspaper"></i>
                            
                        </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='AksharaMalawa-section'>
                <div className='AksharaMalawa-container'>

                    <div className='AksharaMalawa-cards'>
                        
                        <div className='AksharaMalawa-text-card'>
                        <Link className='AksharaMalawa-link' to="#">
                            
                            <h3>අකාරාදී පිළිවෙල</h3>
                            <i class="fa-solid fa-newspaper"></i>
                            
                        </Link>
                        </div>
                        <div className='AksharaMalawa-text-card'>
                        <Link className='AksharaMalawa-link' to="#">
                            
                            <h3>අක්ෂර වින්‍යාසය</h3>
                            <i class="fa-solid fa-newspaper"></i>
                            
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default AksharaMalawa